import { StyleSheet, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import Layout from '../components/Layout';
import { Text, TextInput, Switch, Button } from 'react-native-paper';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { updateTask } from '../database/TaskServices';
import { deleteTask } from '../database/TaskServices';
import { useUser } from '../context/userContext'


export default function UpdateTasks() {
  const navigation = useNavigation()
  const { task, setAtualizar } = useUser();

  const [submitted, setSubmitted] = useState(false)
  const [cardTitle, setCardTitle] = useState(task.titulo)
  const [cardDescription, setCardDescription] = useState(task.description)
  const [cardDate, setCardDate] = useState(task.data)

  const [valid, setValid] = useState(false)



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
  const mountTask = () => {
    return {
      id: task.id,
      description:cardDescription ,
      titulo: cardTitle,
      data: new Date(cardDate),
      status: 1,
      clima: 'desconhecido'
    }
  }

  return (
    <Layout subtitle='Criar Tarefa'>
      <View style={styles.body}>
        <View className="form-container">
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
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Monitorar Clima</Text>
            <View   style={{padding:40, flexDirection: 'row'}}>
            <Button  style={{marginRight:10,}} icon="plus-circle-outline" mode="contained" onPress={() => deleteTask(mountTask()).then(()=>{  setAtualizar(true); navigation.navigate('Home')})}>
              Deletar
            </Button>
            <Button icon="plus-circle-outline" mode="contained" onPress={() => updateTask(mountTask()).then(()=>{  setAtualizar(true); navigation.navigate('Home')})}>
              Atualizar
            </Button>
            </View>
            
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
