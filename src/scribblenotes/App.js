import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Tasks from './src/components/Tasks'
import AppLoading from 'expo-app-loading';
import Home from './src/screens/Home'
import { useFonts, Roboto_400Regular, Roboto_500Medium ,Roboto_700Bold } from '@expo-google-fonts/roboto';
import { DARK_THEME } from './src/styles/themes/themes'
import { ThemeProvider } from 'styled-components';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={DARK_THEME}>
      <Home>
        <Tasks />
      </Home>
    </ThemeProvider>
  );
}
 