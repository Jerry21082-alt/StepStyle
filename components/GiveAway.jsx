import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import ProductReel from "./ProductReel";
import { stateFunc } from "./stateContent/UseStateContext";
import Slider from "./Slider";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

let futureDate = new Date(2024, 6, 23, 17, 30, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const day = days[futureDate.getDay()];
const hour = futureDate.getHours();
const mins = futureDate.getMinutes();
const secs = futureDate.getSeconds();

// get future time
const getTimeDifference = () => {
  const futureTime = futureDate.getTime();
  const currentTime = new Date().getTime();

  const difference = futureTime - currentTime;

  const oneSec = 1000;
  const oneMinute = 60 * oneSec;
  const oneHour = 60 * oneMinute;
  const oneDay = 24 * oneHour;

  const days = Math.floor(difference / oneDay);
  const hours = Math.floor((difference % oneDay) / oneHour);
  const mins = Math.floor((difference % oneHour) / oneMinute);
  const secs = Math.floor((difference % oneMinute) / oneSec);

  return { days, hours, mins, secs };
};

export default function GiveAway() {
  const initialTime = { hours: 0, minutes: 0, seconds: 0 };
  const [time, setTime] = useState(initialTime);
  const isTimeZero =
    time.hours === 0 && time.minutes === 0 && time.seconds === 0;

  function interval() {
    setInterval(countDown, 1000);
  }

  const countDown = () => {
    const countDownResult = getTimeDifference();
    if (
      countDownResult.hours === 0 &&
      countDownResult.mins === 0 &&
      countDownResult.secs === 0
    ) {
      clearInterval(interval);
    } else {
      setTime(countDownResult);
    }
  };

  useEffect(() => {
    interval();
    return () => clearInterval(interval);
  }, []);

  const { products } = stateFunc();

  return (
    <Layout>
      <div className="w-full mt-12">
        {isTimeZero ? (
          <p>Closed Deal!</p>
        ) : (
          <h4 className="text-xs">{`Deal ends on ${day}, ${date} ${month} ${year}, ${hour}:${mins}:${secs}pm`}</h4>
        )}

        <div className="flex items-center space-x-3">
          {Object.entries(time).map(([key, val]) => (
            <div
              key={key}
              className="w-10 h-10 bg-dangerColor flex items-center justify-center mt-4 rounded-md text-snow"
            >
              {val < 10 ? `0${val}` : val}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
