"use client";
import { Input } from "@nextui-org/react";
import myValidator from "@/helper/myValidator";

export const InputComponent = ({ prop }) => {
  const validator = new myValidator();

  let onInputChange = prop.setInput;
  let onError = prop.setErrorMessage;

  const handleInputChange = (e) => {
    const cleanInput = validator.clean(e.target.value);
    onInputChange(cleanInput);
    const validation = validator.cid(cleanInput);
    onError(validation);
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
