import * as React from 'react';
import { FlatList } from 'react-native';
import { useState } from "react";
import TaskBox from '../components/TaskBox';

const Scroll = () => {
  function buscaValoresDoBanco() {
    let values = []
    for (let i = 0; i < 10; i++) {
      values.push({ id: i + 1, titulo: "Lorem Ipsulum Dolor", data: i + "/04/1999", texto: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium" + i })
    }
    return values
  }/*Função de exemplo para ver o scroll até a criação do banco de dados*/
  const [tasks] = useState(buscaValoresDoBanco());

  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TaskBox key={item.id} task={item} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

export default Scroll