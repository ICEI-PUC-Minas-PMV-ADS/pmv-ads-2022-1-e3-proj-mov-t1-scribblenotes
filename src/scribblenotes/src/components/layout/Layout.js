import { StyleSheet, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { blue } from '../../styles/colors';
import Header from '../Header';

const Layout = ({ children, subtitle, goBack }) => {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <PaperProvider theme={theme}>
      <Header subtitle={subtitle} goBack={goBack} />
      <View style={styles.body}>
        {children}
      </View>
    </PaperProvider>
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

const styles = StyleSheet.create({
  body: {
    marginHorizontal: 8,
  }
});

export default Layout