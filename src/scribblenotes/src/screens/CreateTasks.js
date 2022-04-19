import { StyleSheet, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import Layout from '../components/Layout';
import { Text } from 'react-native-paper';

export default function CreateTasks() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Layout subtitle='Criar Tarefa'>
      <View style={styles.body}>
      <Text>
          Criar Tarefas
        </Text>
      </View>
    </Layout>
  );
}


const styles = StyleSheet.create({
  body: {
    marginHorizontal: 8,
  }
});
