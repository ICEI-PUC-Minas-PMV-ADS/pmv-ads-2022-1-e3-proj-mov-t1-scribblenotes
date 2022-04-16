import * as React from 'react';
import { ScrollView } from 'react-native';
import { useState } from "react";
import TaskBox from '../components/TaskBox';


export default function Scroll() {
    function buscaValoresDoBanco() {
        let values = []
        for(let i=1;i<20;i++){
            values.push({ id: i, titulo: "Exemplo", data: i+"/09/1818", texto: "bla bla "+i })
        }
        return values
    }
    const [tasks] = useState(buscaValoresDoBanco());


    return (
        <ScrollView  contentContainerStyle={{ paddingHorizontal: 24 }}>
            {
                tasks.map((item, index) => (
                    <TaskBox key={item.id} task={item}
                    />
                ))
            }
        </ScrollView>
    );

};