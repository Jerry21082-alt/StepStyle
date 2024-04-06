"use client";

import { useEffect, useState } from "react";
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
    <div
      className={`w-full h-14 fixed top-0 left-0 bg-secondaryColor z-[100] flex items-center justify-center flex-col text-sm text-snow ${
        notify ? "open-notify" : "close-notify"
      }`}
    >
      <p>{notifyMsg}</p>
    </div>
  );
}
