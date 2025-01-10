"use client";
import React, { useState, useEffect } from "react";
import { Logo } from "@/reusable/components/icons";
import DefaultLayout from "../layout/default";
import { InputComponent } from "@/reusable/components/inputCID";

export default function Home() {
  const [input, setInput] = useState("");

  return (
    <DefaultLayout>
      <div className="justify-center w-screen grid">
        <Logo size={200} />
        <div className="text-center">File Sharing made easy</div>
      </div>
      <div className="justify-center w-screen grid">
        <InputComponent onInputChange={setInput} />
      </div>
    </DefaultLayout>
  );
}
