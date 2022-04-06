import { View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function NewTaskButton() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Button icon="plus-circle-outline" mode="contained" style={styles.button} onPress={() => console.log('Adicionar Tarefa')}>
      Adicionar Tarefa
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 16,
  },
});
