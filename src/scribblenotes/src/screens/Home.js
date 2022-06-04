import * as React from 'react'
import { BottomNavigation } from 'react-native-paper'

import Tasks from '../screens/Tasks'
import CreateTasks from '../screens/CreateTasks'
import Contacts from '../screens/Contacts'
import RegisterScreen from '../screens/Register'
import Login from './Login'

const Home = () => {
  const [index, setIndex] = React.useState(0)

  const [routes] = React.useState([
    { key: 'login', title: 'Login', icon: 'plus-circle-outline' },
    { key: 'home', title: 'Tasks', icon: 'home-circle' },
    { key: 'create', title: 'Criar Tarefa', icon: 'plus-circle-outline' },
    { key: 'contacts', title: 'Contato', icon: 'contacts' },
    { key: 'register', title: 'Registro', icon: 'account-plus' }
  ])

  const renderScene = BottomNavigation.SceneMap({
    login: Login,
    home: Tasks,
    create: CreateTasks,
    contacts: Contacts,
    register: RegisterScreen,
  })

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )
}

export default Home