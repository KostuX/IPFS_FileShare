import { getContext } from "@/context/index/indexContext";
import React, { useContext } from "react";

const FileInfoDownload = ({ data }) => {
  const { fileInfo } = getContext();
  return (
    <div className="file-info-download">
      <h3>{fileInfo?.data}</h3>
    </div>
  );
};

export default FileInfoDownload;
