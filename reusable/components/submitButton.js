import React from "react";
import { Button } from "@nextui-org/react";

import resolveCID from "@/utils/server/resolveCID";

export default function SubmitButton({ prop }) {
  const input = prop.input;
  const addInfoData = prop.addInfoData;
  const setErrorMessage = prop.setErrorMessage;
  const setSocket = prop.setSocket;
  const socket = prop.socket;

  function handleSubmit() {
    resolveCID({ input, setErrorMessage, addInfoData, setSocket, socket });
  }

  return <Button onPress={handleSubmit}>Submit</Button>;
}
