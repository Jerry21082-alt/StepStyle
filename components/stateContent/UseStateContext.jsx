"use client";

import { useContext, createContext } from "react";
import { useState, useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const Context = createContext();

export default function UseStateContext({ children }) {
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [searchFocus, setSearchFocus] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searched, setSearched] = useState([]);
  const [userInfo, setUserInfo] = useState({
    firstName: "Alien",
    lastName: "Thor",
    address: "V19, North pole, Mars Space",
    phone: "+4887990938",
    mail: "Alien007@spaceship.com",
  });

  const [toggleCart, setToggleCart] = useState(false);
  const [openProductSearch, setOpenProductSearch] = useState(false);
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [notifyMsg, setNotifyMsg] = useState("");
  const [notify, setNotify] = useState(false);
  const [watchList, setWatchList] = useLocalStorage("watchList", []);
  const [recentlyViewed, setRecentlyViewed] = useLocalStorage(
    "recentlyViewed",
    []
  );
  const [height, setHeight] = useState(0);
  const [overlay, setOverlay] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zip: "",
    phone: "",
    email: "",
  });

  let [validInput, setValidInput] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zip: false,
    phone: false,
    email: false,
  });

  const [focus, setFocus] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zip: false,
    phone: false,
    email: false,
  });
  // paymentform input states
  const [paymentInput, setPaymentInput] = useState({
    name: "",
    card: "",
    exp: "",
    cvc: "",
  });

  const [validPaymentInputs, setValidPaymentInputs] = useState({
    name: false,
    mail: false,
    card: false,
    exp: false,
    cvc: false,
  });

  const [paymentFocus, setPaymentFocus] = useState({
    name: false,
    mail: false,
    card: false,
    exp: false,
    cvc: false,
  });

  const [orderSuccess, setOrderSuccess] = useState(false);

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);

    setNotify(true);
    setNotifyMsg("item added to cart");
  };

  const clearCart = () => setCartItems([]);

  const handleDelete = (product) => {
    const updatedCartItems = [...cartItems];
    const itemToDelete = updatedCartItems.find(
      (item) => item.id === product.id
    );

    if (itemToDelete !== -1) {
      updatedCartItems.splice(updatedCartItems.indexOf(itemToDelete), 1);
      setCartItems(updatedCartItems);
    }
  };

  const finishOrder = () => {
    setOrderSuccess(false);
    setOverlay(false);
  };

  const addToViewRecent = (product) => {
    const updatedRecent = [...recentlyViewed];
    const itemToAdd = updatedRecent.some((item) => item.id === product.id);

    if (!itemToAdd) {
      updatedRecent.push(product);
      if (updatedRecent.length > 5) {
        updatedRecent.shift();
      }
    }

    setRecentlyViewed(updatedRecent);
  };

  const increaseItemQuantity = (productId) => {
    const updatedProduct = cartItems.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: item.quantity + 1,
          price: item.price + item.originalPrice,
        };
      }

      return item;
    });

    setCartItems(updatedProduct);
  };

  const decreaseItemQuantity = (productId) => {
    const updatedProduct = cartItems.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
          price: item.price - item.originalPrice,
        };
      }
      return item;
    });

    setCartItems(updatedProduct);
  };

  const getTotalPrice = () => {
    const priceList = [];

    for (let item of cartItems) {
      priceList.push(
        item.percent === 1
          ? item.price
          : item.price - (item.price * item.percent) / 100
      );
    }

    const accumulatedPrice = priceList.length
      ? priceList.reduce((a, b) => a + b)
      : 0;

    return accumulatedPrice;
  };

  return (
    <Context.Provider
      value={{
        toggleCart,
        setToggleCart,
        userInfo,
        formInput,
        setFormInput,
        validInput,
        setValidInput,
        focus,
        setFocus,
        setUserInfo,
        paymentInput,
        setPaymentInput,
        validPaymentInputs,
        setValidPaymentInputs,
        paymentFocus,
        setPaymentFocus,
        totalQuantity,
        addToCart,
        cartItems,
        setCartItems,
        handleDelete,
        searched,
        searchFocus,
        setSearchFocus,
        setSearched,
        searchInput,
        setSearchInput,
        orderSuccess,
        setOrderSuccess,
        finishOrder,
        notifyMsg,
        setNotifyMsg,
        notify,
        setNotify,
        isMounted,
        openMobileNav,
        setOpenMobileNav,
        watchList,
        setWatchList,
        recentlyViewed,
        setRecentlyViewed,
        addToViewRecent,
        recentlyViewed,
        setRecentlyViewed,
        height,
        setHeight,
        increaseItemQuantity,
        decreaseItemQuantity,
        getTotalPrice,
        openProductSearch,
        setOpenProductSearch,
        isInputFocus,
        setIsInputFocus,
        overlay,
        setOverlay,
        clearCart,
        openConfirmModal,
        setOpenConfirmModal,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const stateFunc = () => useContext(Context);
