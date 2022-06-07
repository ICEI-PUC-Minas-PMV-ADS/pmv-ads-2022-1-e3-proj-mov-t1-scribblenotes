import { StyleSheet, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import Layout from '../components/layout/Layout';
import { Text, TextInput, Switch, Button } from 'react-native-paper';
import React, { useState } from 'react';
import WeatherBlockForm from '../components/WeatherBlockForm';
import firebase from '../config/firebaseConfig'
import { useNavigation } from '@react-navigation/native';

const database = firebase.firestore();

const CreateTasks = () => {
  const navigation = useNavigation()
  const [submitted, setSubmitted] = useState(false)
  const [cardTitle, setCardTitle] = useState('')
  const [cardDescription, setCardDescription] = useState('')
  const [cardDate, setCardDate] = useState('')

  const [valid, setValid] = useState(false)


  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);


  const handleSubmit = event => {
    event.preventDefault();
    if (values.title && values.description && values.date && values.weather) {
      setValid(true)
    }
    setSubmitted(true)
  }

  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const createTask = () => {

  }

  return (
    <Layout subtitle='Criar Tarefa' goBack={() => navigation.navigate('Tasks')}>
      <View className="form-container" style={{ marginTop: 24 }}>
        <View className="add-task-form">
          <TextInput
            style={styles.picker}
            label="Titulo"
            value={cardTitle}
            onChangeText={cardTitle => setCardTitle(cardTitle)}
          />
          <TextInput
            style={styles.picker}
            label="Descrição"
            value={cardDescription}
            right={<TextInput.Affix text="/100" />}
            onChangeText={cardDescription => setCardDescription(cardDescription)}
          />
          <TextInput
            style={styles.picker}
            label="Data"
            value={cardDate}
            onChangeText={cardDate => setCardDate(cardDate)}
          />
          <Text style={{ fontSize: 16, fontWeight: '700' }}>Monitorar Clima</Text>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          {isSwitchOn && <WeatherBlockForm />}
          <View style={{ marginTop: 24 }}>
            <Button icon="plus-circle-outline" mode="contained" onPress={() => handleSubmit}>
              Criar
            </Button>
          </View>
        </View>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  picker: {
    backgroundColor: '#ffffffba',
    borderWidth: 0,
    borderRadius: 6,
    marginBottom: 12,
  }
});

export default CreateTasks