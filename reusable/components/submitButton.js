import React, { useState } from "react";
import { getContext } from "@/context/index/indexContext";
import { Button } from "@nextui-org/react";

import wsGetAddress from "@/utils/server/ws/wsGetAddress";
import openWebSocket from "@/utils/server/ws/wsOpen";

export default function SubmitButton() {
  const { input, addInfoData, setErrorMessage, setWebSocket, setFileInfo } =
    getContext();

  const [buttonLoading, setButtonLoading] = useState(false);

  function handleCancel() {
    setButtonLoading(false);
  }

  async function handleSubmit() {
    setButtonLoading(true);
    addInfoData({ title: "Submitted", data: input });
    addInfoData("Getting WS Address...");
    const { address, error } = await wsGetAddress();

    if (!error.ok) {
      setErrorMessage("WS Address could not be resolved");
      return;
    }
    addInfoData(`WS address received: ${address.address}:${address.port}`);
    addInfoData("Getting Socket...");
    const socket = await openWebSocket({ address });
    if (!socket) {
      addInfoData("Cant create Socket...");
      return;
    }
    addInfoData("Socket created! Attempting to open... ");
    setWebSocket(socket);
    socket.onopen = () => {
      addInfoData("WebSocket connection established. Sending data...");
      const requestData = {
        type: "GET_CID_INFO",
        data: input,
      };
      socket.send(JSON.stringify(requestData));
      addInfoData("Data sent to WebSocket server.");
    };
    socket.onmessage = (event) => {
      let data = JSON.parse(event.data);

      addInfoData(data.data);
      if (data.type == "INFO") {
        if (data.data.ok) {
          setFileInfo(data.data);
          setButtonLoading(false);
        }
      }
    };

    socket.onerror = (error) => {
      addInfoData("Socket error...");
    };
  }

  return (
    <>
      <Button isLoading={buttonLoading} onPress={handleSubmit}>
        Find
      </Button>
      <Button
        className={`bg-red-500" ${buttonLoading ? "flex" : "hidden"} `}
        onPress={handleCancel}
      >
        Cancel
      </Button>
    </>
  );
}
