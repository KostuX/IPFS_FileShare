"use client";
import React, { useState, useEffect, createContext } from "react";
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
import { IndexProvider } from "@/context/index/indexContext";

export default function Home() {




  async function addInfoData(newInfoData) {
    if (typeof newInfoData === "string") {
      newInfoData = { data: newInfoData };
    }
    updateInfo(newInfoData, info, setInfo);
  }

  return (
    <DefaultLayout>
      <IndexProvider>
        <div className="">
          <div className=" justify-center w-screen grid">
            <Logo size={200} />
            <div className="text-center">File Sharing made easy</div>
          </div>

          <div className="justify-center w-screen grid">
            <InputComponent     />
          </div>
          <div className="justify-center w-screen grid mt-4">
            <SubmitButton >
              Submit
            </SubmitButton>
          </div>
          <div className="mt-4 w-1/2">
            <ErrorMessage />
          </div>

          <InfoWindow  />
        </div>
      </IndexProvider>
    </DefaultLayout>
  );
}
