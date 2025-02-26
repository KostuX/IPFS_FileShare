import React, { createContext, useState, useContext } from "react";
import { PAGE_STATUS_NORMAL } from "@/reusable/variables/component";
import updateInfo from "@/helper/updateInfo";
const IndexContext = createContext();

  // folder cid QmXENoYNCXeXaogL1mFt7M6w1SD7h7mzsSKVETp7etfqnL
  // hello world Qmc5gCcjYypU7y28oCALwfSvxCBskLuPKWpK4qpterKC7z


export function IndexProvider({ children }) {
  const [input, setInput] = useState("Qmc5gCcjYypU7y28oCALwfSvxCBskLuPKWpK4qpterKC7z");
  const [errorMessage, setErrorMessage] = useState({ ok: true, err: [] });
  const [pageStatus, setPageStatus] = useState(PAGE_STATUS_NORMAL);
  const [webSocket, setWebSocket] = useState(null);
  const [socketAddress, setSocketAddress] = useState(null);
  const [socket, setSocket] = useState(null);
  const [fileInfo, setFileInfo] = useState(null);
  const [info, setInfo] = useState([
    {
      title: "init",
      data: "Just Started",
      time: new Date().toUTCString(),
    },
  ]);
  async function addInfoData(newInfoData) {
    if (typeof newInfoData === "string") {
      newInfoData = { title: "INFO:", data: newInfoData };
    }
    updateInfo(newInfoData, info, setInfo);
  }

  return (
    <IndexContext.Provider
      value={{
        input,
        setInput,
        errorMessage,
        setErrorMessage,
        pageStatus,
        setPageStatus,
        webSocket,
        setWebSocket,
        socketAddress,
        setSocketAddress,
        socket,
        setSocket,
        info,
        setInfo,
        addInfoData,
        fileInfo,
        setFileInfo,
      }}
    >
      {children}
    </IndexContext.Provider>
  );
}

export function getContext() {
  return useContext(IndexContext);
}
