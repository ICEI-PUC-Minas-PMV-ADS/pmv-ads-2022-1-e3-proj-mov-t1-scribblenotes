import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function NewTaskButton() {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Button icon="plus-circle-outline" mode="contained" style={styles.button} onPress={() => navigation.navigate('CreateTasks')}>
      Adicionar Tarefa
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 16,
  },
});
