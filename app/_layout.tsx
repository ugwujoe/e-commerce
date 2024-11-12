import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "sonner-native";

const queryClient= new QueryClient();
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf')
  })
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if(!loaded) {
    return null;
  }
  return (
    <QueryClientProvider client={queryClient}>
    <Stack
    screenOptions={{
      headerShown: false
    }}
    />
    <Toaster />
    </QueryClientProvider>
  );
}
