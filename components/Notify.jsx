"use client";

import { useEffect } from "react";
import { stateFunc } from "./stateContent/UseStateContext";

export default function Notify() {
  const { notifyMsg, notify, setNotify } = stateFunc();

  let startTime = notifyMsg.length;
  let stopTime = 0;

  useEffect(() => {
    const countDown = setInterval(() => {
      startTime--;

      if (startTime === stopTime) setNotify(false);
    }, 1500 / startTime);

    return () => clearInterval(countDown);
  }, [notify]);

  return (
    <div className="flex items-center justify-center">
      <div
        className={`max-w-full fixed top-4 py-2 px-4 bg-secondaryColor rounded-3xl z-[100] flex items-center justify-center flex-col text-snow ${
          notify ? "open-notify" : "close-notify"
        }`}
      >
        <span>{notifyMsg}</span>
      </div>
    </div>
  );
}
