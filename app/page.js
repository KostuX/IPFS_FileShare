"use client";
import React, { useState, useEffect } from "react";
import { Logo } from "@/reusable/components/icons";
import DefaultLayout from "../layout/default";
import { InputComponent } from "@/reusable/components/inputCID";
import ErrorMessage from "@/reusable/components/errorMessage";
import InfoWindow from "@/reusable/components/infoWindow";
import updateInfo from "@/helper/updateInfo";

import {
  PAGE_STATUS_NORMAL,
  PAGE_STATUS_ERROR,
  PAGE_STATUS_LOADING,
  PAGE_STATUS_CANCEL,
} from "@/reusable/variables/component";
import SubmitButton from "@/reusable/components/submitButton";
import openWebSocket from "@/utils/server/ws/wsOpen";

export default function Home() {
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

  async function addInfoData(newInfoData) {
    if (typeof newInfoData === "string") {
      newInfoData = { data: newInfoData };
    }
    updateInfo(newInfoData, info, setInfo);
  }

  return (
    <DefaultLayout>
      <div className="">
        <div className=" justify-center w-screen grid">
          <Logo size={200} />
          <div className="text-center">File Sharing made easy</div>
        </div>

        <div className="justify-center w-screen grid">
          <InputComponent
            prop={{ setInput, setErrorMessage, setSocketAddress }}
          />
        </div>
        <div className="justify-center w-screen grid mt-4">
          <SubmitButton
            prop={{
              pageStatus,
              setPageStatus,
              setErrorMessage,
              input,
              setSocketAddress,
              addInfoData,
              setSocket,
              socket,
            }}
          >
            Submit
          </SubmitButton>
        </div>
        <div className="mt-4 w-1/2">
          <ErrorMessage prop={{ errorMessage }} />
        </div>

        <InfoWindow prop={{ info }} />
      </div>
    </DefaultLayout>
  );
}
