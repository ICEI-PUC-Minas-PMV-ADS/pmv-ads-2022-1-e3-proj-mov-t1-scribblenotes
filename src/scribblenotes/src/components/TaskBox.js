import { View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { Card, Title, Paragraph, Avatar, Text, IconButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../context/userContext'

import React from "react";

export default function TaskBox(props) {
  const navigation = useNavigation()
  const task = props.task
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const { setTask } = useUser();

  return (
    <Card style={styles.card}>
    <IconButton
                icon="file-edit-outline"
                color="green"
                style={{ left:330}}
                onPress={() => {
                  setTask(task)
                  navigation.navigate('UpdateTasks')
                }}
              />
      <Card.Content>
      
        <Title>{props.task.titulo}</Title>

        <View style={{display: 'flex', flexDirection: 'row', marginVertical: 12}}>
          <Avatar.Icon size={24} icon="calendar" style={{marginRight: 12}} />
          <Paragraph>{props.task.data}</Paragraph>
        </View>
        <Paragraph>{props.task.description}</Paragraph>
        <Text>{props.task.clima}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 16,
    borderWidth: 3,
  },
});
