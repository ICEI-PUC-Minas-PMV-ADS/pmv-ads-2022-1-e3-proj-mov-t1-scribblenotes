import { View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { Card, Title, Paragraph, Avatar, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function TaskBox() {
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
        <Title>Lorem Ipsulum Dolor</Title>
        <View style={{display: 'flex', flexDirection: 'row', marginVertical: 12}}>
          <Avatar.Icon size={24} icon="calendar" style={{marginRight: 12}} />
          <Paragraph>28/04/1999</Paragraph>
        </View>
        <Paragraph>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</Paragraph>
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
