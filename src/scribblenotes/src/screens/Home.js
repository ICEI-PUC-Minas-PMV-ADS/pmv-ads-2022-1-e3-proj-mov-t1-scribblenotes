import * as React from 'react'
import { BottomNavigation } from 'react-native-paper'

import Tasks from '../screens/Tasks'
import CreateTasks from '../screens/CreateTasks'
import Excluidos from './Excluidos'
import { useUser } from '../context/userContext'

const Home = () => {
  const [index, setIndex] = React.useState(0)
  const { setAtualizar } = useUser();

  const [routes] = React.useState([
    { key: 'home', title: 'Tasks', icon: 'home-circle' },
    { key: 'create', title: 'Criar Tarefa', icon: 'plus-circle-outline' },
    { key: 'excluidos', title: 'Excluidos', icon: 'history' },
  ])

  const renderScene = BottomNavigation.SceneMap({
    home: Tasks,
    create: CreateTasks,
    excluidos: Excluidos,
  })
  setAtualizar(true)
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )
}

export default Home
