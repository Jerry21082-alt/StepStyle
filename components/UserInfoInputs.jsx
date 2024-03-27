"use client";

import { useEffect } from "react";
import { stateFunc } from "./stateContent/UseStateContext";
import { CgDanger } from "react-icons/cg";

export default function UserInfoInputs({ isCustomer, setIscustomer }) {
  const NAME_REGEX = /^[A-Za-z\']+$/;
  const MAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const ADDRESS_REGEX = /^[a-zA-Z0-9\s\.,'"\-()!?&%$#@*+=]+$/;
  const ZIP_REGEX = /^\d{5}$/;
  const PHONE_REGEX = /^(\d{11})$/;

  const {
    formInput,
    setFormInput,
    validInput,
    setValidInput,
    focus,
    setFocus,
    userInfo,
    setUserInfo,
  } = stateFunc();

  useEffect(() => {
    const firstNameValid = NAME_REGEX.test(formInput.firstName);
    const lastNameValid = NAME_REGEX.test(formInput.lastName);
    const addressValid = ADDRESS_REGEX.test(formInput.address);
    const cityValid = ADDRESS_REGEX.test(formInput.city);
    const zipValid = ZIP_REGEX.test(formInput.zip);
    const mailValid = MAIL_REGEX.test(formInput.email);
    const phoneValid = PHONE_REGEX.test(formInput.phone);

    setValidInput({
      firstName: firstNameValid,
      lastName: lastNameValid,
      address: addressValid,
      city: cityValid,
      zip: zipValid,
      email: mailValid,
      phone: phoneValid,
    });
  }, [
    formInput.firstName,
    formInput.lastName,
    formInput.address,
    formInput.phone,
    formInput.email,
    formInput.zip,
    formInput.city,
  ]);

  //this functions validates every formInput change
  const handleFirstNameChange = (e) => {
    setFormInput({
      ...formInput,
      firstName: e.target.value,
    });
  };
  const handleLastNameChange = (e) => {
    setFormInput({
      ...formInput,
      lastName: e.target.value,
    });
  };
  const handleAddressNameChange = (e) => {
    setFormInput({
      ...formInput,
      address: e.target.value,
    });
  };
  const handleCityChange = (e) => {
    setFormInput({
      ...formInput,
      city: e.target.value,
    });
  };
  const handleZipChange = (e) => {
    setFormInput({
      ...formInput,
      zip: e.target.value,
    });
  };
  const handlePhoneChange = (e) => {
    setFormInput({
      ...formInput,
      phone: e.target.value,
    });
  };
  const handleMailChange = (e) => {
    setFormInput({
      ...formInput,
      email: e.target.value,
    });
  };

  //This functions changes the focus state of each form inputs
  const handleFirstNameFocus = () => {
    setFocus({
      ...focus,
      firstName: true,
    });
  };
  const handleLastNameFocus = () => {
    setFocus({
      ...focus,
      lastName: true,
    });
  };
  const handleAddressFocus = () => {
    setFocus({
      ...focus,
      address: true,
    });
  };
  const handleCityNameFocus = () => {
    setFocus({
      ...focus,
      city: true,
    });
  };
  const handleZipFocus = () => {
    setFocus({
      ...focus,
      zip: true,
    });
  };
  const handlePhoneFocus = () => {
    setFocus({
      ...focus,
      phone: true,
    });
  };
  const handleMailFocus = () => {
    setFocus({
      ...focus,
      email: true,
    });
  };

  const ErrMessage = ({ message }) => (
    <div className="bg-heroColor rounded-md p-2 flex justify-between">
      <p className="text-xs text-dangerColor">{message}</p>
      <CgDanger color="red" />
    </div>
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormInput({
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      zip: "",
      phone: "",
      email: "",
    });
    setIscustomer((prev) => !prev);
    setUserInfo({
      ...userInfo,
      firstName: formInput.firstName,
      lastName: formInput.lastName,
      address: formInput.address,
      phone: formInput.phone,
      mail: formInput.email,
    });
  };

  const validInputs =
    validInput.firstName &&
    validInput.lastName &&
    validInput.address &&
    validInput.zip &&
    validInput.city &&
    validInput.phone &&
    validInput.email;

  return (
    <form
      onSubmit={handleSubmit}
      className={`${isCustomer ? "hidden" : null} mt-5 flex flex-col gap-2`}
    >
      <div className="md:flex justify-between">
        <span className="flex flex-col gap-1">
          <label className="font-[500] py" htmlFor="firstname">
            First Name*
          </label>
          <div
            className={
              !validInput.firstName && focus.firstName && formInput.firstName
                ? null
                : "hidden"
            }
          >
            <ErrMessage
              message={`Please enter a valid name using only letters`}
            />
          </div>
          <input
            className="border border-primaryColor p-2 outline-none md:w-[28vw]"
            type="text"
            value={formInput.firstName}
            onChange={handleFirstNameChange}
            onFocus={handleFirstNameFocus}
            placeholder="Type here..."
            id="firstname"
          />
        </span>

        <span className="flex flex-col gap-1">
          <label className="font-[500] py" htmlFor="lastname">
            Last Name*
          </label>
          <div
            className={
              !validInput.lastName && focus.lastName && formInput.lastName
                ? null
                : "hidden"
            }
          >
            <ErrMessage
              message={`Please enter a valid name using only letters`}
            />
          </div>
          <input
            className="border border-primaryColor p-2 outline-none md:w-[28vw]"
            type="text"
            value={formInput.lastName}
            onChange={handleLastNameChange}
            onFocus={handleLastNameFocus}
            placeholder="Type here..."
            id="lastname"
          />
        </span>
      </div>

      <span className="flex flex-col gap-1">
        <label className="font-[500] py" htmlFor="address">
          Address*
        </label>
        <div
          className={
            !validInput.address && focus.address && formInput.address
              ? null
              : "hidden"
          }
        >
          <ErrMessage
            message={`Please enter a valid address. Address must not include '/><:_^'`}
          />
        </div>
        <input
          className="border border-primaryColor p-2 outline-none"
          type="text"
          value={formInput.address}
          onChange={handleAddressNameChange}
          onFocus={handleAddressFocus}
          placeholder="Type here..."
          id="address"
        />
      </span>

      <div className="md:flex justify-between">
        <span className="flex flex-col gap-1">
          <label className="font-[500] py" htmlFor="city">
            City/Town*
          </label>
          <div
            className={
              !validInput.city && focus.city && formInput.city ? null : "hidden"
            }
          >
            <ErrMessage
              message={`Please enter a valid city or town. Must not include '/><:_^'`}
            />
          </div>
          <input
            className="border border-primaryColor p-2 outline-none md:w-[28vw]"
            type="text"
            value={formInput.city}
            onChange={handleCityChange}
            onFocus={handleCityNameFocus}
            placeholder="Type here..."
            id="city"
          />
        </span>

        <span className="flex flex-col gap-1">
          <label className="font-[500] py" htmlFor="zipcode">
            Zip Code*
          </label>
          <div
            className={
              !validInput.zip && focus.zip && formInput.zip ? null : "hidden"
            }
          >
            <ErrMessage
              message={`Please enter a valid zip code. Must be five numbers from 0-9`}
            />
          </div>
          <input
            className="border border-primaryColor p-2 outline-none md:w-[28vw]"
            type="text"
            value={formInput.zip}
            onChange={handleZipChange}
            onFocus={handleZipFocus}
            placeholder="Type here..."
            id="zipcode"
          />
        </span>
      </div>

      <div className="md:flex justify-between">
        <span className="flex flex-col gap-1">
          <label className="font-[500] py" htmlFor="phone">
            Phone*
          </label>
          <div
            className={
              !validInput.phone && focus.phone && formInput.phone
                ? null
                : "hidden"
            }
          >
            <ErrMessage message={`Must be a number of 12 digits`} />
          </div>
          <input
            className="border border-primaryColor p-2 outline-none md:w-[28vw]"
            type="number"
            required={false}
            value={formInput.phone}
            onChange={handlePhoneChange}
            onFocus={handlePhoneFocus}
            placeholder="Type here..."
            id="phone"
          />
        </span>

        <span className="flex flex-col gap-1">
          <label className="font-[500] py" htmlFor="email">
            Email*
          </label>
          <div
            className={
              !validInput.email && focus.email && formInput.email
                ? null
                : "hidden"
            }
          >
            <ErrMessage
              message={`Please enter a valid email address. Must include @ symbol`}
            />
          </div>
          <input
            className="border border-primaryColor p-2 outline-none md:w-[28vw]"
            type="text"
            value={formInput.email}
            onChange={handleMailChange}
            onFocus={handleMailFocus}
            placeholder="Type here..."
            id="email"
          />
        </span>
      </div>
      <button
        onClick={() => setIscustomer(false)}
        className={
          !validInputs
            ? " bg-primaryColor rounded-2xl py-2 text-md font-[500] mt-5 md:w-[20%]"
            : " bg-secondaryColor rounded-2xl py-2 text-md text-snow font-bold mt-5 md:w-[20%]"
        }
        disabled={!validInputs ? true : false}
      >
        Save
      </button>
    </form>
  );
}
