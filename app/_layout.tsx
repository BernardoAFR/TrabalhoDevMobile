import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import QuestoesProvider from '../components/contexts/questionsContext';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Background } from '@react-navigation/elements';
import { StyleSheet } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

      <QuestoesProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: true }} />
          <Stack.Screen name="questoes" options={{ headerShown: true }} />
          <Stack.Screen name="feedback" options={{ headerShown: true }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </QuestoesProvider>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}


