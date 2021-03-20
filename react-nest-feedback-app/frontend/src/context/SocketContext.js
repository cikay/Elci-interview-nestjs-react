import React, { useState, useContext, useEffect } from 'react';
import io from 'socket.io-client';
const SocketContext = React.createContext();
export const useSocketContext = () => useContext(SocketContext);
export function SocketProvider({ children }) {
  const [socket, setSocket] = useState();
  useEffect(() => {
   
    const newSocket = io('http://localhost:3500');
    console.log('newSocket', newSocket);
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
