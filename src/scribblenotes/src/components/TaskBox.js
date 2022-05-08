import { View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { Card, Title, Paragraph, Avatar, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import React from "react";

export default function TaskBox(props) {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{props.task.titulo}</Title>
        <Text>{props.task.id}</Text>
        <View style={{display: 'flex', flexDirection: 'row', marginVertical: 12}}>
          <Avatar.Icon size={24} icon="calendar" style={{marginRight: 12}} />
          <Paragraph>{props.task.data}</Paragraph>
        </View>
        <Paragraph>{props.task.texto}</Paragraph>
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
