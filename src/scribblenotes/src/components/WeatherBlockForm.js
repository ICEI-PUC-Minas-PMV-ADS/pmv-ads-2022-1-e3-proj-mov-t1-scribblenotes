import React from 'react'
import {Picker} from '@react-native-picker/picker';
import AppLoading from 'expo-app-loading';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import api from '../services/axios';
export default function WeatherBlockForm() {
  const [selectedLanguage, setSelectedLanguage] = React.useState();
  const [wheaterInfo, setWeatherInfo] = React.useState()
  React.useEffect(() => {
    api.get('/weather?key=3660b20c').then(({data}) => {
      console.log(data)
    })
  }, [])

  const pickerRef = React.useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  return (
    <View>
      <Picker
          ref={pickerRef}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 16,
  },
});
