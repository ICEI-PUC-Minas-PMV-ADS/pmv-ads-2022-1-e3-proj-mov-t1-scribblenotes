import React, { createContext, useState, useContext, useEffect } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [id, setId] = useState();
  const [task, setTask] = useState();
  const [atualizar, setAtualizar] = useState(true);

  return (
    <UserContext.Provider
      value={{
        id,
        setId,
        task,
        setTask,
        atualizar,
        setAtualizar
      }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  const { id, setId, task, setTask, atualizar, setAtualizar } = context;
  return { id, setId, task, setTask, atualizar, setAtualizar };
}
