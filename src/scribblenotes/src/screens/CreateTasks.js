import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Bottom from '../components/Bottom';
import { Text } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import { deleteTask, getTask, insertTask, updateTask } from '../database/WeatherServicesDB';

export default function CreateTasks() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  const [data, setData] = useState([]);

  useEffect(()=>{
    
    getTask().then((value) => { 
      console.log(value);
    });
    
    // insertTask({description: "TESTE INSERT DESCRICAO", titulo: "TESTE INSERT DESCRICAO", data: "2022-06-03 21:24:00.000", status: true}).then((value) => { 
    //   console.log(value);
    // });
      
    // updateTask({description: "descricao alterada", titulo: "titulo alterado", data: "2022-06-03 21:30:00.000", status: true, id: 10}).then((value) => {
    //   console.log(value);
    // })
    
    // deleteTask(10).then((value) => {
    //   console.log(value)
    // })
          
  },[])
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


function createTask(){
  const [values, setValues] = useState({
    title: "",
    description: "",
    date: "",
    weather: ""
  })

  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false)

  const handleTitleInputChange = event => {
    setValues({...values, title: event.target.value})
  }

  const handleDescInputChange = event => {
    setValues({...values, description: event.target.value})
  }

  const handleDateInputChange = event => {
    setValues({...values, date: event.target.value})
  }

  const handleWeatherInputChange = event => {
    setValues({...values, title: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (values.title && values.description && values.date && values.weather) {
      setValid(true)
    }
    setSubmitted(true)
  }

  return (
    <div className = "form-container">
      <form className = "add-task-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div className="task-salva">A vossa task foi salva com sucesso!</div> : null}
        <input
          onChange={handleTitleInputChange}
          value={values.title}
          className="form-field"
          placeholder="Título"
          name = "Título"
        />
        {submitted && !values.title ? <span>Por favor, coloque um título</span> : null}
        <input
          onChange={handleDescInputChange}
          value={values.description}
          className="form-field"
          placeholder="Descrição"
          name="Descrição"
        />
        {submitted && !values.description ? <span>Por favor, coloque uma descrição</span> : null}
        <input
          onchange = {handleDateInputChange}
          value={values.date}
          className="form-field"
          placeholder="Data"
          name="Data"
        />
        {submitted && !values.date ? <span>Por favor, coloque uma Data</span> : null}
        <input
        value={values.weather}
          onchange = {handleWeatherInputChange}
          className="form-field"
          placeholder="Monitorar-Clima"
          name="Monitorar-Clima"
        />
        {submitted && !values.weather ? <span>Por favor, coloque o Clima</span> : null}
        <button
        className="form-field"
        type = "submit">Salvar</button>
      </form>
    </div>
  )
}




const styles = StyleSheet.create({
  body: {
    marginHorizontal: 8,
  }
});
