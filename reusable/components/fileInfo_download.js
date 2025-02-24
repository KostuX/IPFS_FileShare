import { getContext } from "@/context/index/indexContext";
import { Button } from "@nextui-org/button";
import React, { useContext } from "react";
import FileData from "@/utils/class/fileData";
import formatBytes from "@/utils/formatFileSize";
import truncate from "@/utils/textTrunkate";
import openWebSocket from "@/utils/server/ws/wsCreate";

const FileInfoDownload = ({ data }) => {
  const { fileInfo, webSocket } = getContext();

  let fileData = {};
  if (fileInfo) {
    fileData = new FileData(fileInfo);

    async function handleDownload() {
      const socket = await openWebSocket();
      socket.connect();
      console.log("handle download");
      socket.send(JSON.stringify({ type: "DOWNLOAD", data: fileData.cid }));

      socket.connection.onmessage = (event) => {
        const data = event.data;
        const blob = new Blob([data], { type: 'application/octet-stream' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'downloaded_file';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        console.log('File downloaded');
      };
    }

    return (
      <div
        className={` "text-center justify-center   ${
          fileInfo?.ok ? "block" : "hidden"
        }`}
      >
        <h3 className="text-center">{fileData?.cid}</h3>

        {fileData.links.map((file, i) => (
          <h2 className="text-center" key={i}>
            {truncate(file.Name)} {formatBytes(file.Tsize)}
          </h2>
        ))}

        <div className="flex justify-center mt-5">
          <Button onPress={handleDownload}>Download</Button>
        </div>
      </div>
    );
  }
};

export default FileInfoDownload;
