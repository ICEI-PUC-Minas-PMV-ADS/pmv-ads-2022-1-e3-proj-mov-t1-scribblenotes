import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { blue } from '../styles/colors';

import Tasks from '../screens/Tasks'
import CreateTasks from '../screens/CreateTasks'
import Contacts from '../screens/Contacts'
import RegisterScreen from '../screens/Register'
import Login from '../screens/Login'
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const Main = () => {

  return (
    <PaperProvider theme={theme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ header: () => null }} />
        <Stack.Screen name="Login" component={Login} options={{ header: () => null }} />
        <Stack.Screen name="Tasks" component={Tasks} options={{ header: () => null }} />
        <Stack.Screen name="CreateTasks" component={CreateTasks} options={{ header: () => null }} />
        <Stack.Screen name="Contacts" component={Contacts} options={{ header: () => null }} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ header: () => null }} />
      </Stack.Navigator>
    </PaperProvider>
  )
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: blue[500],
    accent: 'yellow',
    background: blue[300],
  },
}

export default Main