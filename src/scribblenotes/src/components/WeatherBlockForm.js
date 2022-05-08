import React from 'react'
import {Picker} from '@react-native-picker/picker'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import api from '../services/axios'


export default function WeatherBlockForm() {
  const [selectedCity, setSelectedCity] = React.useState()
  const [forecastDays, setForecastDays] = React.useState([])
  const [dateWeatherInfo, setDateWeatherInfo] = React.useState()

  React.useEffect(() => {
  }, [selectedCity])

  const callAPI = () => {
    api.get(`/weather?format=json-cors&key=3660b20c&city_name=${selectedCity}/`).then(({data}) => {
      console.log(data.results)
      const { results } = data

      setForecastDays([...results.forecast])
    }).catch((err) => {
      console.log(err)
    })
  }

  const cityPickerRef = React.useRef();
  const weatherDatePickerRef = React.useRef();

  function open() {
    cityPickerRef.current.focus();
  }

  function close() {
    cityPickerRef.current.blur();
  }

  
  const collectCompleteWeatherInfo = () => {
    console.log(dateWeatherInfo)
    const selectDay = forecastDays.find((day) => day.date === dateWeatherInfo)
    console.log(selectDay)
  }

  return (
    <View>
      <View style={{paddingVertical: 8}}>
        <View>
          <Text style={{paddingBottom: 8, fontSize: 18}}>
            Selecione a Cidade
          </Text>
        </View>
        <Picker
            ref={cityPickerRef}
            selectedValue={selectedCity}
            onValueChange={(itemValue, itemIndex) => {
              callAPI()
              setSelectedCity(itemValue)
            }
          }
            style={styles.picker}
          >
          <Picker.Item label="Selecionar Cidade" value="null" />
          <Picker.Item label="Belo Horizonte, MG" value="BH,MG" />
          <Picker.Item label="Uberaba, MG" value="Uberaba,MG" />
          <Picker.Item label="Uberlândia, MG" value="Uberlandia,MG" />
          <Picker.Item label="Divinópolis, MG" value="Divinopolis, MG" />
          <Picker.Item label="Campinas, SP" value="Campinas,SP" />
          <Picker.Item label="São Paulo, SP" value="SaoPaulo,SP" />
          <Picker.Item label="Salvador, BA" value="Salvador,BA" />
          <Picker.Item label="Manaus, AM" value="Manaus,AM" />
          <Picker.Item label="Curitiba, PR" value="Curitiba,PR" />
          <Picker.Item label="Florianopolis, SC" value="Florianopolis,SC" />
        </Picker>
      </View>
      <View style={{paddingVertical: 8}}>
        <View>
          <Text style={{paddingBottom: 8, fontSize: 18}}>
            Selecione a data
          </Text>
        </View>
        <Picker
          ref={weatherDatePickerRef}
          selectedValue={dateWeatherInfo}
          onValueChange={(itemValue, itemIndex) =>
            setDateWeatherInfo(itemValue)
          }
          style={styles.picker}
          enabled={forecastDays ? true : false}
          >
            {forecastDays.map((forecast) => (
              <Picker.Item key={forecast.date} label={`${forecast.date} - ${forecast.description}`} value={forecast.date} />
            ))}
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 16,
  },
  picker: {
    height: 32,
    backgroundColor: '#ffffffba',
    borderWidth: 0,
    borderRadius: 6,
  }
});
