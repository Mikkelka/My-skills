---
name: expo-setup
description: Use ONLY when setting up a new Expo React Native project with Expo Router and tab navigation. Covers correct SDK 54 package versions, project structure, and common pitfalls to avoid.
---

# Expo Project Setup Guide

## Quick Start - Correct Package.json

For **Expo SDK 54** with **Expo Router** and **tab navigation**, use ONLY these packages:

```json
{
  "dependencies": {
    "@expo/vector-icons": "^15.0.0",
    "expo": "~54.0.0",
    "expo-constants": "~18.0.0",
    "expo-font": "~14.0.0",
    "expo-linking": "~8.0.12",
    "expo-router": "~6.0.0",
    "expo-status-bar": "~3.0.0",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "react-native": "0.81.5",
    "react-native-safe-area-context": "~5.6.0",
    "react-native-screens": "~4.16.0",
    "react-native-web": "^0.21.0"
  },
  "devDependencies": {
    "@types/react": "~19.1.10",
    "typescript": "~5.9.2"
  }
}
```

## DO NOT Install These (causes conflicts)

These packages caused dependency conflicts and should be **avoided** unless specifically needed:

- `react-native-reanimated` - requires `react-native-worklets` plugin
- `react-native-gesture-handler` - not needed for basic tab navigation
- `react-native-worklets` - breaks babel if installed without reanimated
- `expo-splash-screen` - version conflicts across SDK versions
- `expo-system-ui` - not needed for basic apps
- `expo-web-browser` - not needed unless opening external URLs

## Required Config Files

### app.json

```json
{
  "expo": {
    "name": "my-app",
    "slug": "my-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.example.myapp"
    },
    "android": {
      "package": "com.example.myapp",
      "adaptiveIcon": {
        "backgroundColor": "#1a1a2e"
      }
    },
    "web": {
      "bundler": "metro"
    },
    "plugins": ["expo-router"],
    "experiments": {
      "typedRoutes": true
    }
  }
}
```

### tsconfig.json

```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["**/*.ts", "**/*.tsx", ".expo/types/**/*.ts", "expo-env.d.ts"]
}
```

## Project Structure

```
my-app/
├── package.json
├── app.json
├── tsconfig.json
├── constants/
│   └── theme.ts          # Colors and spacing constants
├── components/
│   └── Screen.tsx        # SafeAreaView + ScrollView wrapper
├── app/
│   ├── _layout.tsx       # Root Stack layout
│   └── (tabs)/
│       ├── _layout.tsx   # Tab navigation layout
│       ├── index.tsx     # Home tab
│       ├── explore.tsx   # Explore tab
│       └── profile.tsx   # Profile tab
```

## Key Components

### Screen.tsx (reusable wrapper)

```tsx
import { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing } from '@/constants/theme';

export function Screen({ children }: PropsWithChildren) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { backgroundColor: colors.background, flex: 1 },
  content: { paddingBottom: spacing.xxl, paddingHorizontal: spacing.lg, paddingTop: spacing.lg }
});
```

### app/_layout.tsx

```tsx
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style="light" />
    </>
  );
}
```

### app/(tabs)/_layout.tsx

```tsx
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { colors } from '@/constants/theme';

function tabIcon(name: keyof typeof Ionicons.glyphMap) {
  return ({ color, size }: { color: string; size: number }) => (
    <Ionicons name={name} color={color} size={size} />
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          height: 72,
          paddingBottom: 12,
          paddingTop: 8
        }
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: tabIcon('home-outline') }} />
      <Tabs.Screen name="explore" options={{ title: 'Explore', tabBarIcon: tabIcon('compass-outline') }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: tabIcon('person-outline') }} />
    </Tabs>
  );
}
```

## Common Errors and Fixes

### "Project is incompatible with this version of Expo Go"
- Expo Go version must match SDK version
- SDK 54 project requires Expo Go with SDK 54 support
- Check Play Store for latest Expo Go update

### "Cannot find module 'react-native-worklets/plugin'"
- Caused by installing `react-native-reanimated@4.x` without proper setup
- **Fix:** Remove reanimated if not needed, or install matching worklets version

### "Incompatible React versions"
- `react` and `react-native-renderer` must have exact same version
- **Fix:** Pin exact versions in package.json, use `npm install --legacy-peer-deps`

### "Cannot find native module 'ExpoUI'"
- Caused by mixing SDK versions (e.g., SDK 52 packages with SDK 56 expo-router)
- **Fix:** All expo packages must match the same SDK version

## Running the App

```bash
npx expo start
```

Then scan the QR code with **Expo Go** on your Android phone.

## Adding New Tabs

1. Create a new file in `app/(tabs)/`, e.g., `settings.tsx`
2. Add a `<Tabs.Screen>` entry in `app/(tabs)/_layout.tsx`
3. The tab appears automatically - no other config needed

## Adding New Packages

Always use `npx expo install <package>` instead of `npm install` - it automatically picks the correct version for your SDK.
