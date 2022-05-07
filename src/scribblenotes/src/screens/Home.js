import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

import Tasks from '../screens/Tasks';
import CreateTasks from '../screens/CreateTasks';
import Clima from '../screens/Clima';
import Contacts from '../screens/Contacts';

import { blue } from '../styles/colors';

export default function Bottom() {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', icon: 'home-circle' },
        { key: 'create', title: 'Criar Tarefa', icon: 'plus-circle-outline' },
        { key: 'clima', title: 'Clima', icon: 'weather-cloudy' },
        { key: 'contacts', title: 'Contato', icon: 'contacts' }

    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: Tasks,
        create: CreateTasks,
        clima: Clima,
        contacts: Contacts
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};
