import { StyleSheet, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import Layout from '../components/Layout';
import { Text, TextInput, Switch, Button } from 'react-native-paper';
import React, { useState } from 'react';
import firebase from '../config/firebaseConfig'
import WeatherBlockForm from '../components/weatherBlockForm';

const databse = firebase.firestore

export default function CreateTasks() {
  const [values, setValues] = useState({
    title: "",
    description: "",
    date: "",
    weather: ""
  })



  const [submitted, setSubmitted] = useState(false)
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
    <Layout subtitle='Criar Tarefa'>
      <View style={styles.body}>
        <View className="form-container">
          <form className="add-task-form" onSubmit={handleSubmit}>
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
            <Text style={{ fontSize: 16, fontWeight: 600 }}>Monitorar Clima</Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
            {isSwitchOn && <WeatherBlockForm />}
            <button
              className="form-field"
              type="submit">Salvar</button>
          </form>
        </View>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  body: {
    marginHorizontal: 8,
    marginTop: 16,
  },
  picker: {
    backgroundColor: '#ffffffba',
    borderWidth: 0,
    borderRadius: 6,
    marginBottom: 12,
  }
});
