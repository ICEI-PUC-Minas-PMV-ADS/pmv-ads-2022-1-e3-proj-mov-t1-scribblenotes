import * as React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useState, useEffect, useCallback } from "react";
import TaskBox from '../components/TaskBox';
import { useUser } from '../context/userContext'
import { getUsersTasks } from '../database/TaskServices';

export default function ScrollTask() {
    const { id } = useUser();
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const { atualizar, setAtualizar } = useUser();

    useEffect(() => {

        if(atualizar){
            getUsersTasks(id,1).then(data => setData(data))
        }
    }, [atualizar])
    setAtualizar(false)

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        try {
            setData(await getUsersTasks(id,1));
            setRefreshing(false)
        } catch (error) {
            console.error(error);
        }
    }, [onRefresh]);

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <TaskBox key={item.id} task={item} />
            )}
            keyExtractor={(item) => item.id}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        />
    )
}





