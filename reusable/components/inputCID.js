import { Input } from "@nextui-org/react";
import myValidator from "@/helper/myValidator";
import React, { useContext } from "react";
import { IndexContext } from "@/app/page";

import { getContext } from "@/context/index/indexContext";

export const InputComponent = ({ prop }) => {
  const validator = new myValidator();
<<<<<<< HEAD

  const {
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
  } = useContext(IndexContext);
=======
  const { setInput, setErrorMessage } = getContext();
>>>>>>> e4d73d4 (connection to ws)

  const handleInputChange = (e) => {
    const cleanInput = validator.clean(e.target.value);
    setInput(cleanInput);
    const validation = validator.cid(cleanInput);
    setErrorMessage(validation);
  };

  return (
    <div className="w-screen grid  ">
      <div className=" justify-center flex mt-12 ">
        <Input
          type="text"
          placeholder={"Please Enter Content-ID"}
          onInput={handleInputChange}
          className="w-3/4 max-w-2xl"
          size="lg"
        />
      </div>
    </div>
  );
};
