import {
  Mulish_400Regular,
  Mulish_700Bold,
  Mulish_500Medium_Italic,
} from '@expo-google-fonts/mulish';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import AnimatedSplashScreen from '@/components/splash';
import Animated, { FadeIn } from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DataContext } from '@/context';
import { ITask } from '@/utils/interface';

export default function RootLayout() {
  const [appReady, setAppReady] = useState<boolean>(false);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [splashAnimationFinished, setSplashAnimationFinished] =
    useState<boolean>(false);

  let [fontsLoaded, fontError] = useFonts({
    Mulish: Mulish_400Regular,
    MulishBold: Mulish_700Bold,
    MulishItalic: Mulish_500Medium_Italic,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      setAppReady(true);
    }
  }, [fontsLoaded, fontError]);

  const showAnimatedSplash = !appReady || !splashAnimationFinished;
  if (showAnimatedSplash) {
    return (
      <AnimatedSplashScreen
        onAnimationFinish={(isCancelled) => {
          if (!isCancelled) {
            setSplashAnimationFinished(true);
          }
        }}
      />
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <DataContext.Provider value={{ tasks, setTasks }}>
          <Animated.View style={{ flex: 1 }} entering={FadeIn}>
            <Stack>
              <Stack.Screen
                name='index'
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name='(tabs)'
                options={{
                  headerShown: false,
                }}
              />
            </Stack>
          </Animated.View>
        </DataContext.Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
