import { StyleSheet, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import NewTaskButton from '../components/NewTaskButton';
import Layout from '../components/Layout';
import ScrollTask from '../components/Scroll';
import firebase from '../config/firebaseConfig'

const databse = firebase.firestore

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Layout subtitle='Home'>
      <View style={styles.body}>
        <NewTaskButton />
        <ScrollTask />
      </View>

    </Layout>
  );
}


const styles = StyleSheet.create({
  body: {
    marginHorizontal: 8,
  }
});
