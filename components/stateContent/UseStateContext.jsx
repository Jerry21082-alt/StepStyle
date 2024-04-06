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
    mail: "Alien007@gmail.com",
  });

  const [quantity, setQuantity] = useState(1);
  const [toggleCart, setToggleCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [notifyMsg, setNotifyMsg] = useState("");
  const [notify, setNotify] = useState(false);

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

  const incQty = () => {
    setQuantity((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    if (quantity - 1 < 1) {
      setQuantity(1);
    } else setQuantity((prevQty) => prevQty - 1);
  };

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);

    setNotify(true);
    setNotifyMsg("item added to cart");
  };

  const handleDelete = (product) => {
    const updatedCartItems = [...cartItems];
    const itemToDelete = updatedCartItems.find(
      (item) => item.id === product.id
    );

    if (itemToDelete !== -1) {
      updatedCartItems.splice(itemToDelete, 1);
      setCartItems(updatedCartItems);
    }
  };

  const searchForProduct = (array, searchTerm) => {
    const foundProduct = [];
    const filteredProduct = array.filter((product) =>
      product.product_description
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    foundProduct.push(filteredProduct);
    setSearched([...foundProduct]);
    setSearchInput(searchTerm);
  };

  const finishOrder = () => {
    setOrderSuccess(false);
  };

  const products = [
    {
      id: 1,
      product_photo: "/pngegg (1).png",
      product_description: "Nike Precision 6 Mens Basketball Shoes",
      product_price: 109,
      rating: [1, 2, 3],
    },
    {
      id: 2,
      product_photo: "/pngegg (10).png",
      product_description: "Nike Men's Air Monarch IV Cross Trainer",
      product_price: 69,
      rating: [1, 2, 3],
    },
    {
      id: 3,
      product_photo: "/hero.png",
      product_description: "Nike Men's Air Max Correlate Running Shoe",
      product_price: 74,
      rating: [1],
    },
    {
      id: 4,
      product_photo: "/pngegg (7).png",
      product_description: "TRETORN Women's Loyola Lace Up Sneakers",
      product_price: 54,
      rating: [1, 2],
    },
    {
      id: 5,
      product_photo: "/pngegg (15).png",
      product_description:
        "Alicegana Women's Athletic Road Running Lace up Walking Shoes Comfort Lightweight Fashion Sneakers Breathable",
      product_price: 22,
      rating: [1, 2, 3, 4],
    },
    {
      id: 6,
      product_photo: "/pngegg (16).png",
      product_description: "Steel toe shoes men and women breathable sneaker",
      product_price: 40,
      rating: [1, 2, 3, 4, 5],
    },
    {
      id: 7,
      product_photo: "/pngegg (17).png",
      product_description:
        "Nike Air Monarch IV (4E) Extra-Wide Men's Shoes White/Black-Varsity Red 416355-101",
      product_price: 123,
      rating: [1, 2, 3],
    },
    {
      id: 8,
      product_photo: "/pngegg (5).png",
      product_description:
        "Nike Air Max 270 White/ Industrial Blue/ Citron FJ400 Running Shoes",
      product_price: 200,
      rating: [1, 2],
    },
    {
      id: 9,
      product_photo: "/pngegg (19).png",
      product_description: "PUMA Womens Prowl Alt Sneaker",
      product_price: 200,
      rating: [1, 2, 3, 4, 5],
    },
    {
      id: 10,
      product_photo: "/pngegg (2).png",
      product_description: "New Balance Women's 460 V3 Running Shoe",
      product_price: 54,
      rating: [1, 2, 3],
    },
    {
      id: 11,
      product_photo: "/pngegg (3).png",
      product_description: "Blowfish Malibu Women's Mamba Canvas Sneaker",
      product_price: 102,
      rating: [1, 2, 3],
    },
    {
      id: 13,
      product_photo: "/pngegg (1).png",
      product_description:
        "Nike Air Max 90 Men's Shoes Size - 12, Wolf Grey/Burgundy Crush",
      product_price: 104,
      rating: [1, 2],
    },
    // {
    //   id: 12,
    //   product_photo: "/pngwing.com (7).png",
    //   product_description:
    //     "New Balance Women's Fresh Foam Arishi V4 Running Shoe",
    //   product_price: 60,
    // },
    // {
    //   id: 14,
    //   product_photo: sneaker23,
    //   product_description: "New Balance Women's 574 Core Sneaker",
    //   product_price: 63,
    // },
    // {
    //   id: 15,
    //   product_photo: sneaker14,
    //   product_description: "PUMA mens Redon Bungee Lace Up Sneakers",
    //   product_price: 106,
    // },
    // {
    //   id: 16,
    //   product_photo: sneaker24,
    //   product_description: "adidas Originals Men's X_PLR Running Shoe",
    //   product_price: 89,
    // },
  ];

  return (
    <Context.Provider
      value={{
        toggleCart,
        setToggleCart,
        quantity,
        setQuantity,
        incQty,
        decQty,
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
        totalPrice,
        totalQuantity,
        addToCart,
        cartItems,
        handleDelete,
        searchForProduct,
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
        products,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const stateFunc = () => useContext(Context);
