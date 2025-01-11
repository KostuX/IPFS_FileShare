import React from "react";
import { Button } from "@nextui-org/react";
import { api_getWsAddress } from "../variables/apiRoutes";
import {
  PAGE_STATUS_NORMAL,
  PAGE_STATUS_ERROR,
  PAGE_STATUS_LOADING,
  PAGE_STATUS_CANCEL,
} from "@/reusable/variables/component";

import resolveCID from "@/utils/server/resolveCID";

export default function SubmitButton({ prop }) {
  const input = prop.input;
  const setInfo = prop.setInfo;
  const setErrorMessage = prop.setErrorMessage;
  const setPageStatus = prop.setPageStatus;
  const pageStatus = prop.pageStatus;
  const setSocketAddress = prop.setSocketAddress;

  function handleSubmit() {
    resolveCID({ input, setErrorMessage, setInfo });
  }

  return (
    <Button
      onPress={handleSubmit}
      disabled={pageStatus === PAGE_STATUS_LOADING}
    >
      Submit
    </Button>
  );
}
