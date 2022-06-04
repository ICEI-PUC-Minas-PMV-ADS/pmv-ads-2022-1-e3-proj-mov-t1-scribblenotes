import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

import { Appbar } from 'react-native-paper';

const Header = ({ subtitle, goBack }) => {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Appbar.Header>
      {goBack && <Appbar.BackAction onPress={goBack} />}
      <Appbar.Content title="Scriblenotes" subtitle={subtitle} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
}

export default Header