import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import CreateTasks from '../screens/CreateTasks';
import Login from '../screens/Login'
import Register from '../screens/Register'

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="CreateTasks"
        component={CreateTasks}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
        }}/>
        <Stack.Screen
        name="Register"
        component={Register}
        options={{
          header: () => null,
        }}/>
    </Stack.Navigator>
  );
};

export default Main;
