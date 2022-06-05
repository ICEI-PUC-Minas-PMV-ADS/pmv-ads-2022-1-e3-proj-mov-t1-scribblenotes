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

    useEffect(() => {
        if (data.length == 0) {
            getUsersTasks(id).then(data => setData(data))
        }
    }, [data])

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        try {
            setData(await getUsersTasks(id));
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





