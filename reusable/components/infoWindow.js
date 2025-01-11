"use client";

import { useEffect, useState } from "react";
import displayObject from "@/helper/displayObject";

export default function InfoWindow({ prop }) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo(prop.info);
  }, [prop.info]);

  return (
    <div className="justify-center flex">
      <div className="mt-48 text-center border text-red-500 w-5/6">
        Debug
        <div className="text-white">
          <div>
            {info
              .slice(-10)
              .toReversed()
              .map((inf, index) => (
                <div key={index}>
                  [{inf?.time}] {inf?.title} {displayObject(inf?.data)}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
