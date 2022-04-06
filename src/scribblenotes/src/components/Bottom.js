import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

import Tasks from '../screens/Tasks';
import CreateTasks from '../screens/CreateTasks';
import { blue } from '../styles/colors';

export default function Bottom() {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home-circle' },
    { key: 'create', title: 'Criar Tarefa', icon: 'plus-circle-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Tasks,
    create: CreateTasks,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};
