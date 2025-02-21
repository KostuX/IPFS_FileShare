import { useEffect, useState } from "react";
import { getContext } from "@/context/index/indexContext";

export default function ErrorMessage() {
  const { errorMessage } = getContext();

  function prepareErrorMessage(error) {
    if (error && error.length > 0) {
      return error.map((err, index) => <div key={index}>{err}</div>);
    }
    return null;
  }

  return (
    <div className="text-center text-red-500">
      {prepareErrorMessage(errorMessage.err)}
    </div>
  );
}
