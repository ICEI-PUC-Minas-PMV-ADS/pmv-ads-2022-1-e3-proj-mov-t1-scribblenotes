import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [id, setId] = useState();
  const [email, setEmail] = useState();

  return (
    <UserContext.Provider
      value={{
        id,
        setId,
        email,
        setEmail 
      }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  const { id, setId, email, setEmail } = context;
  return { id, setId, email, setEmail };
}
