import { useState, useEffect } from "react";
import { Button, Input } from "@nextui-org/react";
import myValidator from "@/helper/myValidator";
import SubmitButton from "./submitButton";
import ErrorMessage from "./errorMessage";

export const InputComponent = ({ onInputChange }) => {
  const validator = new myValidator();

  const [input, setInput] = useState();
  const [errMsg, setErrMsg] = useState([]);

  return (
    <div className="w-screen grid  ">
      <div className=" justify-center flex mt-12 ">
        <Input
          type="text"
          placeholder={"Please Enter Content-ID"}
          onInput={(e) => {
            let cleanInput = validator.clean(e.target.value);
            onInputChange(cleanInput);
            setInput(cleanInput);
            let msg = validator.cid(cleanInput);

            if (!msg.ok) {
              setErrMsg(msg.err[0]);
            } else {
              setErrMsg([""]);
            }
          }}
          className="w-3/4 max-w-2xl"
          size="lg"
        />
      </div>
      <ErrorMessage message={errMsg} />
      <SubmitButton />
    </div>
  );
};
