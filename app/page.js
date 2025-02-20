"use client";
import React, { useState, useEffect, useContext, createContext } from "react";
import { Logo } from "@/reusable/components/icons";
import DefaultLayout from "../layout/default";
import { InputComponent } from "@/reusable/components/inputCID";
import ErrorMessage from "@/reusable/components/errorMessage";
import InfoWindow from "@/reusable/components/infoWindow";
import updateInfo from "@/helper/updateInfo";

import nookies from "nookies";

import {
  PAGE_STATUS_NORMAL,
  PAGE_STATUS_ERROR,
  PAGE_STATUS_LOADING,
  PAGE_STATUS_CANCEL,
} from "@/reusable/variables/component";
import SubmitButton from "@/reusable/components/submitButton";
import openWebSocket from "@/utils/server/ws/wsOpen";

export default function Home() {
  async function addInfoData(newInfoData) {
    if (typeof newInfoData === "string") {
      newInfoData = { data: newInfoData };
    }
    updateInfo(newInfoData, info, setInfo);
  }
  useEffect(() => {
    const cookies = nookies.get(null);
    const sessionCookie = cookies.session;
    console.log(sessionCookie);
  }, []);
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
