import React, { createContext, useState, useContext } from 'react';
import { PAGE_STATUS_NORMAL } from '@/reusable/variables/component';

const IndexContext = createContext();

export function IndexProvider({ children }){
  const [input, setInput] = useState();
  const [errorMessage, setErrorMessage] = useState({ ok: true, err: [] });
  const [pageStatus, setPageStatus] = useState(PAGE_STATUS_NORMAL);
  const [webSocket, setWebSocket] = useState(null);
  const [socketAddress, setSocketAddress] = useState(null);
  const [socket, setSocket] = useState(null);  
  const [info, setInfo] = useState([
    {
      title: "init",
      data: "Just Started",
      time: new Date().toUTCString(),
    },
  ]);

  return (
    <IndexContext.Provider value={{ 
        input, setInput,
        errorMessage, setErrorMessage,
        pageStatus, setPageStatus,
        webSocket, setWebSocket,
        socketAddress, setSocketAddress,
        socket, setSocket,
        info, setInfo,
    }}>
      {children}
    </IndexContext.Provider>
  );
};

export function getContext(){
  return useContext(IndexContext);
};
