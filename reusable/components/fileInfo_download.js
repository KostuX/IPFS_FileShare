import { getContext } from "@/context/index/indexContext";
import { Button } from "@nextui-org/button";
import React, { useContext } from "react";
import FileData from "@/utils/class/fileData";

const FileInfoDownload = ({ data }) => {
  const { fileInfo, webSocket } = getContext();

  let fileData = new FileData(fileInfo);

  function handleDownload() {
    console.log("handle download");
    webSocket.send(JSON.stringify({ ok: true, data: "test data" }));
  }

  return (
    <div
      className={` "text-center justify-center   ${
        fileInfo?.ok ? "block" : "hidden"
      }`}
    >
      <h3>{fileData?.cid}</h3>
      <h3>{fileData?.totalSize}kb</h3>
      <Button onPress={handleDownload}>Download</Button>
    </div>
  );
};

export default FileInfoDownload;
