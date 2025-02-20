import React, { useContext } from "react";
import { Button } from "@nextui-org/react";
import { IndexContext } from "@/app/page";

import resolveCID from "@/utils/server/resolveCID";

export default function SubmitButton({ prop }) {
  const { input } = useContext(IndexContext);

  function handleSubmit() {
    resolveCID({ input });
  }

  return <Button onPress={handleSubmit}>Submit</Button>;
}
