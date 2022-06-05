import * as React from 'react';
import { FlatList } from 'react-native';
import { useState, useEffect } from "react";
import TaskBox from '../components/TaskBox';
import { useUser } from '../context/userContext'
import { getUsersTasks } from '../database/TaskServices';

export default function ScrollTask() {
    const { id } = useUser();
    const [isLoaded, setIsLoaded] = useState(false);
    async function buscaValoresDoBanco() {
        const values = await getUsersTasks(id)
        setIsLoaded(true)
        return values
    }
    const [tasks] = buscaValoresDoBanco();

    {
        if (isLoaded) {

            return (<View>Tem tarefas</View>)
            /**
             * <FlatList
                data={tasks}
                renderItem={({ item }) => (
                    <TaskBox key={item.id} task={item} />
                )}
                keyExtractor={(item) => item.id}
            />
             */
        } else {
            return (<View>Sem tarefas hoje</View>)
        }
    }



}




