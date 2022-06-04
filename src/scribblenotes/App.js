import { StyleSheet, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import TaskBox from './src/components/TaskBox';
import NewTaskButton from './src/components/NewTaskButton';
import Layout from './src/components/Layout';
import Header from './src/components/Header';
import Bottom from './src/components/Bottom';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { blue } from './src/styles/colors';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  
  return (
    <>
      <PaperProvider theme={theme}>
        <Bottom />
      </PaperProvider>
    </>
  );
}


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: blue[500],
    accent: 'yellow',
    background: blue[300],
  },
};
