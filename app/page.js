"use client";
import React, { createContext } from "react";
import { Logo } from "@/reusable/components/icons";
import DefaultLayout from "../layout/default";
import { InputComponent } from "@/reusable/components/inputCID";
import ErrorMessage from "@/reusable/components/errorMessage";
import InfoWindow from "@/reusable/components/infoWindow";
import FileInfoDownload from "@/reusable/components/fileInfo_download";
import { IndexProvider } from "@/context/index/indexContext";
import SubmitButton from "@/reusable/components/submitButton";


//export const IndexContext = createContext();
export default function Home() {

 
  return (
    <IndexProvider>
      <DefaultLayout>
        <div className="">
          <div className=" justify-center w-screen grid">
            <Logo size={200} />
            <div className="text-center">File Sharing made easy</div>
          </div>

          <div className="justify-center w-screen grid">
            <InputComponent />
          </div>
          <div className="justify-center w-screen grid mt-4">
            <SubmitButton>Submit</SubmitButton>
          </div>
          <div className="mt-4 ">
            <ErrorMessage />
          </div>
          <div className="mt-4 ">
            <FileInfoDownload />
          </div>

          <InfoWindow />
        </div>
      </DefaultLayout>
    </IndexProvider>
  );
}
