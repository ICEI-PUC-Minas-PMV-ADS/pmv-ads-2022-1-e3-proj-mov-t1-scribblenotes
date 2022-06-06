import * as React from 'react';
import { StyleSheet, FlatList, RefreshControl, View } from 'react-native';
import { useState, useEffect, useCallback } from "react";
import TaskBox from '../components/TaskBox';
import { useUser } from '../context/userContext'
import { getUsersTasks } from '../database/TaskServices';

export default function Excluidos() {
    const { id } = useUser();
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const { atualizar, setAtualizar } = useUser();

    setAtualizar(true)

    useEffect(() => {

        if(atualizar){
            getUsersTasks(id, 0).then(data => setData(data))
        }
    }, [atualizar])
    setAtualizar(false)

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        try {
            setData(await getUsersTasks(id,0));
            setRefreshing(false)
        } catch (error) {
            console.error(error);
        }
    }, [onRefresh]);

    return (
        <View style={styles.container}>
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
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Platform.OS === "ios" ? 0 : 50,
      backgroundColor: "#032859"
  
    }
})