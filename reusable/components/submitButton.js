import React from "react";
import { Button } from "@nextui-org/react";
import {
  PAGE_STATUS_NORMAL,
  PAGE_STATUS_ERROR,
  PAGE_STATUS_LOADING,
  PAGE_STATUS_CANCEL,
} from "@/reusable/variables/component";

import openWS from "@/utils/server/ws/openSock";

export default function SubmitButton({ prop }) {
  const input = prop.input;
  const setErrorMessage = prop.setErrorMessage;
  const setPageStatus = prop.setPageStatus;
  const pageStatus = prop.pageStatus;
  const setSocketAddress = prop.setSocketAddress;

  const handleSubmit = async () => {
    setPageStatus(PAGE_STATUS_LOADING);

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: "getSock", data: input }),
    };
    try {
      const response = await fetch("/api/socket", options);

      let data;
      try {
        data = await response.json();
      } catch (error) {
        data = { message: "Invalid JSON response" };
      }

      if (data.ok) {
        setSocketAddress(data.message);

        setPageStatus(PAGE_STATUS_NORMAL);
        setErrorMessage({ ok: true, err: [] });
        // Handle success (e.g., show a success message or redirect)
      } else {
        setPageStatus(PAGE_STATUS_ERROR);
        setErrorMessage({
          ok: false,
          err: [data.message || "Submission failed"],
        });
      }
    } catch (error) {
      setPageStatus(PAGE_STATUS_ERROR);
      setErrorMessage({
        ok: false,
        err: [error.message || "An error occurred"],
      });
    }
  };

  return (
    <Button
      onPress={handleSubmit}
      disabled={pageStatus === PAGE_STATUS_LOADING}
    >
      Submit
    </Button>
  );
}
