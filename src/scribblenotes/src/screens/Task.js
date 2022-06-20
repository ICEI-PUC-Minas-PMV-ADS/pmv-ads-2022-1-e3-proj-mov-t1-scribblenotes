import React from 'react';
import { View } from 'react-native';
import Layout from '../components/Layout';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';

const Task = ({title, description, date}) => {
    const [cardTitle, setCardTitle] = useState('Title');
    const [cardDescription, setCardDescription] = useState('Description');
    const [cardDate, setCardDate] = useState('26/11');
  
    return (
    <Layout subtitle='Task'>
      <View  style={styles.container}>
        <Text style={{color:'white', fontSize: 32, marginBottom: 16 }}>{cardTitle}</Text>
        <Text style={{color:'white', fontSize: 24, marginBottom: 16 }}>{cardDescription}</Text>
        <Text style={{color:'white', fontSize: 24, marginBottom: 16 }}>{cardDate}</Text>
        <TouchableOpacity style={styles.btnSalvar} onPress={()=>console.log('Editar')}>
          <Text style={{color:'white', textAlign:"center",}}>Editar</Text>
        </TouchableOpacity>
      </View>
    </Layout>
    );
    
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'right',
      backgroundColor: '#011126',
      paddingHorizontal: 18,
    },
    btnSalvar:{
      width: '100%',
      height: 40,
      backgroundColor: '#000',
      borderRadius: 3,
      justifyContent:'center',
      marginTop: 24, 
    },
  });
  
  export default Task;
  