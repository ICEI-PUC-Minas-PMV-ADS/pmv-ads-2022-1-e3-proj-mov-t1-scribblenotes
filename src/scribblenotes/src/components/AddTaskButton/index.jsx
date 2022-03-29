import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import SVGPlusCircle from '../../assets/plus-circle.svg'
import {Shadow} from 'react-native-shadow-2';

const AddTaskButton = () => {
    return (
        <Shadow 
            distance={6}
            startColor={'#08678C'}
            radius={8}
            offset={[3, 4]}
        >
            <Pressable style={styles.button}>
                <SVGPlusCircle width={28} height={28} />
                <Text style={styles.textColor}>Adicionar</Text>
            </Pressable>
        </Shadow>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 12,
        width: 346,
        height: 45,
        backgroundColor: '#011126',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textColor: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 12,
    },
  })

export default AddTaskButton
