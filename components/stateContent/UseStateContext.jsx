"use client";

import { useContext, createContext } from "react";
import { toast } from "react-hot-toast";
import { useState, useEffect } from "react";
const Context = createContext();

export default function UseStateContext({ children }) {
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

  const [newProduct, setNewProduct] = useState([]);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const ls = typeof window !== "undefined" ? window.localStorage : null;

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartItems(JSON.parse(ls.getItem("cart")));
    }
  }, []);
  useEffect(() => {
    if (cartItems.length > 0) {
      ls.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // This function increases the number of item to be added to the cart (productDetailsPage)
  const incQty = () => {
    setQuantity((prevQty) => prevQty + 1);
  };
  // This function decreases the number of item to be added to the cart (prodcutDetailsPage)
  const decQty = () => {
    if (quantity - 1 < 1) {
      setQuantity(1);
    } else setQuantity((prevQty) => prevQty - 1);
  };

  const addToCart = (productId) => {
    setCartItems((prev) => [...prev, productId]);
    toast.success("Item added to cart!");
  };
  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const position = prev.indexOf(productId);

      if (position !== -1) {
        return prev.filter((val, index) => index !== position);
      }
      return prev;
    });
  };

  const handleDelete = (product) => {
    const targetProduct = newProduct.filter((item) => item.id !== product.id);
    setNewProduct(targetProduct);
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
        newProduct,
        setNewProduct,
        removeFromCart,
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
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const stateFunc = () => useContext(Context);
