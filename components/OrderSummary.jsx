import Image from "next/image";
import { useEffect } from "react";
import { CgDanger } from "react-icons/cg";
import { stateFunc } from "./stateContent/UseStateContext";

const NAME_REGEX = /^[A-Za-z\s']+$/;
const CARD_REGEX = /^5[1-5][0-9]{14}$/;
const CARD_EXPIRY_REGEX = /^(0[1-9]|1[0-2])\/\d{2}$/;
const CARD_CVC_REGEX = /^\d{3}$/;

export default function OrderSummary({
  productDetails,
  quantity,
  isCustomer,
  setOrderSuccess,
}) {
  const product = productDetails;
  let totalPrice = 0;

  for (let item of product) {
    totalPrice +=
      item.percent === 1
        ? item.price
        : item.price - (item.price * item.percent) / 100;
  }

  const {
    paymentInput,
    setValidPaymentInputs,
    validPaymentInputs,
    paymentFocus,
    setPaymentFocus,
    setPaymentInput,
  } = stateFunc();

  useEffect(() => {
    //TEST IF INPUT REGEX RETURNS TRUE WHEN COMPARED WITH INPUTS AND SETVALIDATE
    const nameResult = NAME_REGEX.test(paymentInput.name);
    const cardResult = CARD_REGEX.test(paymentInput.card);
    const expResult = CARD_EXPIRY_REGEX.test(paymentInput.exp);
    const cvcResult = CARD_CVC_REGEX.test(paymentInput.cvc);

    setValidPaymentInputs({
      name: nameResult,
      card: cardResult,
      exp: expResult,
      cvc: cvcResult,
    });
  }, [
    paymentInput.name,
    paymentInput.mail,
    paymentInput.card,
    paymentInput.exp,
    paymentInput.cvc,
  ]);

  //functions allowing handling each input change
  const handleNameChanged = (e) => {
    setPaymentInput({
      ...paymentInput,
      name: e.target.value,
    });
  };

  const handleMailChanged = (e) => {
    setPaymentInput({
      ...paymentInput,
      mail: e.target.value,
    });
  };

  const handleCardChanged = (e) => {
    setPaymentInput({
      ...paymentInput,
      card: e.target.value,
    });
  };

  const handleExp = (e) => {
    setPaymentInput({
      ...paymentInput,
      exp: e.target.value,
    });
  };

  const handleCVC = (e) => {
    setPaymentInput({
      ...paymentInput,
      cvc: e.target.value,
    });
  };

  //funtions allowing each input focus and blur state
  const handleMailFocus = () => {
    setFocus({
      ...paymentFocus,
      mail: true,
    });
  };

  const handleNameFocus = () => {
    setPaymentFocus({
      ...paymentFocus,
      name: true,
    });
  };

  const handleNameBlur = () => {
    setPaymentFocus({
      ...paymentFocus,
      name: false,
    });
  };

  const handleCardFocus = () => {
    setPaymentFocus({
      ...paymentFocus,
      card: true,
    });
  };

  const handleCardBlur = () => {
    setPaymentFocus({
      ...paymentFocus,
      card: false,
    });
  };

  const handleCvcFocus = () => {
    setPaymentFocus({
      ...paymentFocus,
      cvc: true,
    });
  };

  const handleCvcBlur = () => {
    setPaymentFocus({
      ...paymentFocus,
      cvc: false,
    });
  };

  const handleExpFocus = () => {
    setPaymentFocus({
      ...paymentFocus,
      exp: true,
    });
  };

  const handleExpBlur = () => {
    setPaymentFocus({
      ...paymentFocus,
      exp: false,
    });
  };

  const ErrMessage = ({ message }) => (
    <div className="bg-heroColor rounded-md p-2 flex justify-between">
      <p className="text-xs text-dangerColor">{message}</p>
      <CgDanger color="red" />
    </div>
  );
  const SubTotal = ({ price, title }) => (
    <div className="flex justify-between items-center">
      <p className="font-bold">{title}</p>
      <p>{price}</p>
    </div>
  );
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      isCustomer &&
      (validPaymentInputs.name ||
        validPaymentInputs.cvc ||
        validPaymentInputs.card ||
        validPaymentInputs.exp)
    ) {
      setPaymentInput({
        name: "",
        mail: "",
        card: "",
        exp: "",
        cvc: "",
      });
      setOrderSuccess(true);
    }
  };

  return (
    <div className="w-full border-2 border-primaryColor border-solid rounded-md p-3">
      <h2 className="font-bold text-xl">Order Summary</h2>
      <div className="flex relative items-center w-full bg-primaryColor h-12 rounded-3xl overflow-hidden p-2 mt-5">
        <input
          type="text"
          placeholder="Enter coupon code"
          className="border-none outline-none bg-primaryColor h-full w-2/3 ml-2"
        />
        <button className="bg-heroColor text-sm border-none outline-none rounded-3xl text-snow py-2 px-4 absolute right-1">
          Apply
        </button>
      </div>
      <h3 className="mt-5 text-lg font-bold">Payment Details</h3>
      <div className="flex items-center mt-5 gap-2 border-t border-primaryColor">
        <div className="w-[50px]">
          <Image
            src="/pngwing.com (3).png"
            alt="visacard logo"
            width={50}
            height={50}
          />
        </div>
        <div className="w-[50px]">
          <Image
            src="/pngwing.com (2).png"
            alt="mastercard logo"
            width={50}
            height={50}
          />
        </div>
      </div>
      <form className="mt-5 flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <label className="font-medium text-sm" htmlFor="cardholder">
            Card Holder Name*
          </label>
          <div
            className={
              !validPaymentInputs.name && paymentFocus.name && paymentInput.name
                ? 'block space-y-1'
                : "hidden"
            }
          >
            <ErrMessage
              message={`Please enter a valid name using only letters`}
            />
          </div>
          <input
            className="border border-primaryColor p-2 outline-none"
            type="text"
            value={paymentInput.name}
            onChange={handleNameChanged}
            onFocus={handleNameFocus}
            onBlur={handleNameBlur}
            id="cardholder"
          />
        </div>

        <span className="flex flex-col gap-1 relative">
          <label className="font-medium text-sm" htmlFor="cardnumber">
            Card Number*
          </label>
          <div
            className={
              !validPaymentInputs.card && paymentFocus.card && paymentInput.card
                ? 'block space-y-1'
                : "hidden"
            }
          >
            <ErrMessage message={`Please enter a valid masterCard number`} />
          </div>
          <input
            className="border border-primaryColor p-2 outline-none"
            type="number"
            value={paymentInput.card}
            onChange={handleCardChanged}
            onFocus={handleCardFocus}
            id="cardnumber"
          />
        </span>

        <span className="flex flex-col gap-1 relative">
          <label className="font-medium text-sm" htmlFor="cardexp">
            Card Exp*
          </label>
          <div
            className={
              !validPaymentInputs.exp && paymentFocus.exp && paymentInput.exp
                ? 'block space-y-1'
                : "hidden"
            }
          >
            <ErrMessage
              message={`please enter a valid date in this format m/y`}
            />
          </div>
          <input
            className="border border-primaryColor p-2 outline-none"
            type="text"
            value={paymentInput.exp}
            onChange={handleExp}
            onFocus={handleExpFocus}
            id="cardexp"
          />
        </span>

        <span className="flex flex-col gap-1 relative">
          <label className="font-medium text-sm" htmlFor="cvc">
            CVC*
          </label>
          <div
            className={
              !validPaymentInputs.cvc && paymentFocus.cvc && paymentInput.cvc
                ? 'block space-y-1'
                : "hidden"
            }
          >
            <ErrMessage message={`cvc must be 3 digits from 0-9`} />
          </div>
          <input
            className="border border-primaryColor p-2 outline-none"
            type="number"
            value={paymentInput.cvc}
            onChange={handleCVC}
            onFocus={handleCvcFocus}
            id="cvc"
          />
        </span>
      </form>
      <div className="mt-5 flex flex-col gap-2 border-b border-primaryColor py-4">
        <SubTotal
          title={`Sub Total`}
          price={`$${quantity ? totalPrice * quantity : totalPrice}`}
        />
        <SubTotal
          title={`Tax(10%)`}
          price={
            quantity
              ? `$${(totalPrice * quantity * 10) / 100}`
              : `$${(totalPrice * 10) / 100}`
          }
        />
        <SubTotal
          title={`Coupon Discount`}
          price={`-$${
            quantity
              ? (totalPrice * quantity * 10) / 100
              : `$${(totalPrice * 10) / 100}`
          }`}
        />
        <SubTotal title={`Shipping Cost`} price={`-$0.00`} />
      </div>
      <div className="flex justify-between items-center mt-5">
        <h3 className="font-[500] text-lg">Total</h3>
        <h3 className="font-bold text-lg">
          $
          {totalPrice}
        </h3>
      </div>
      <span className="flex justify-center items-center">
        <button
          disabled={
            !validPaymentInputs.name ||
            !validPaymentInputs.cvc ||
            !validPaymentInputs.card ||
            !validPaymentInputs.exp
              ? true
              : false
          }
          type="submit"
          onClick={handleSubmit}
          className={`bg-${`${
            !validPaymentInputs.name ||
            !validPaymentInputs.cvc ||
            !validPaymentInputs.card ||
            !validPaymentInputs.exp
              ? "primaryColor"
              : "secondaryColor"
          }`} w-full outline-none border-none text-snow text-lg py-2 px-4 mt-5 rounded-3xl`}
        >
          Pay
        </button>
      </span>
    </div>
  );
}
