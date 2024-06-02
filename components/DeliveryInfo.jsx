"use client";

import UserInfoInputs from "./UserInfoInputs";
import { stateFunc } from "./stateContent/UseStateContext";

export default function DeliveryInfo({ isCustomer, setIscustomer }) {
  const { userInfo } = stateFunc();

  return (
    <div
      className={`w-full md:w-[55vw] border-2 border-primaryColor border-solid rounded-md p-3 my-5`}
    >
      <div className="flex justify-between items-center">
        <h5 className="text-xl">Delivery Information</h5>
        {isCustomer && (
          <button
            onClick={() => setIscustomer(false)}
            className="bg-primaryColor rounded-2xl py-1 px-4 text-sm font-bold"
          >
            Edit
          </button>
        )}
      </div>
      <div className={isCustomer ? "block" : "hidden"}>
        <div className="flex items-center gap-2 mt-5">
          <span>{userInfo.firstName}</span>
          <span>{userInfo.lastName}</span>
        </div>
        <p className="text-sm mt-2">{userInfo.address}</p>
        <p className="text-sm mt-1">{userInfo.phone}</p>
        <p className="text-sm mt-1">{userInfo.mail}</p>
      </div>
      <UserInfoInputs isCustomer={isCustomer} setIscustomer={setIscustomer} />
    </div>
  );
}
