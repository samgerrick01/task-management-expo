import {
  Mulish_400Regular,
  Mulish_700Bold,
  Mulish_500Medium_Italic,
} from "@expo-google-fonts/mulish";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator } from "react-native";

export default function RootLayout() {
  let [fontsLoaded, fontError] = useFonts({
    Mulish: Mulish_400Regular,
    MulishBold: Mulish_700Bold,
    MulishItalic: Mulish_500Medium_Italic,
  });

  if (!fontsLoaded && !fontError) {
    return <ActivityIndicator size="large" color="red" />;
  }
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
