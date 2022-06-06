import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import CreateTasks from '../screens/CreateTasks'
import UpdateTasks from '../screens/UpdateTasks'
import Login from '../screens/Login'
import Register from '../screens/Register'
import { useUser } from '../context/userContext'

const Stack = createNativeStackNavigator();

const Main = () => {
  const { id } = useUser();

    if (id === undefined) {
      return (<Login />)
    } else {
      return (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="CreateTasks"
            component={CreateTasks}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="UpdateTasks"
            component={UpdateTasks}
            options={{
              header: () => null,
            }}
          />
          
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              header: () => null,
            }} />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              header: () => null,
            }} />
        </Stack.Navigator>
      );


    }
  };

  export default Main;
