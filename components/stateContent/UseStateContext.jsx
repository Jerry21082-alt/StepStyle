"use client";

import { useContext, createContext } from "react";
import { toast } from "react-hot-toast";
import { useState, useEffect } from "react";
import {
  sneaker,
  sneaker1,
  sneaker2,
  sneaker3,
  sneaker4,
  sneaker10,
  sneaker14,
  sneaker7,
  sneaker9,
  sneaker16,
  sneaker17,
  sneaker19,
  sneaker21,
  sneaker22,
  sneaker23,
  sneaker24,
} from "../../public/sneaker-assets/index";

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
  const products = [
    {
      id: 1,
      product_photo: sneaker,
      product_description: "Nike Precision 6 Mens Basketball Shoes",
      product_price: 109,
    },
    {
      id: 2,
      product_photo: sneaker1,
      product_description: "Nike Men's Air Monarch IV Cross Trainer",
      product_price: 69,
    },
    {
      id: 3,
      product_photo: sneaker2,
      product_description: "Nike Men's Air Max Correlate Running Shoe",
      product_price: 74,
    },
    {
      id: 4,
      product_photo: sneaker3,
      product_description: "TRETORN Women's Loyola Lace Up Sneakers",
      product_price: 54,
    },
    {
      id: 5,
      product_photo: sneaker4,
      product_description:
        "Alicegana Women's Athletic Road Running Lace up Walking Shoes Comfort Lightweight Fashion Sneakers Breathable",
      product_price: 22,
    },
    {
      id: 6,
      product_photo: sneaker16,
      product_description: "Steel toe shoes men and women breathable sneaker",
      product_price: 40,
    },
    {
      id: 7,
      product_photo: sneaker19,
      product_description:
        "Nike Air Monarch IV (4E) Extra-Wide Men's Shoes White/Black-Varsity Red 416355-101",
      product_price: 123,
    },
    {
      id: 8,
      product_photo: sneaker7,
      product_description:
        "Nike Air Max 270 White/ Industrial Blue/ Citron FJ400 Running Shoes",
      product_price: 200,
    },
    {
      id: 9,
      product_photo: sneaker21,
      product_description: "PUMA Womens Prowl Alt Sneaker",
      product_price: 200,
    },
    {
      id: 10,
      product_photo: sneaker9,
      product_description: "New Balance Women's 460 V3 Running Shoe",
      product_price: 54,
    },
    {
      id: 11,
      product_photo: sneaker10,
      product_description: "Blowfish Malibu Women's Mamba Canvas Sneaker",
      product_price: 102,
    },
    {
      id: 12,
      product_photo: sneaker22,
      product_description:
        "New Balance Women's Fresh Foam Arishi V4 Running Shoe",
      product_price: 60,
    },
    {
      id: 13,
      product_photo: sneaker17,
      product_description:
        "Nike Air Max 90 Men's Shoes Size - 12, Wolf Grey/Burgundy Crush",
      product_price: 104,
    },
    {
      id: 14,
      product_photo: sneaker23,
      product_description: "New Balance Women's 574 Core Sneaker",
      product_price: 63,
    },
    {
      id: 15,
      product_photo: sneaker14,
      product_description: "PUMA mens Redon Bungee Lace Up Sneakers",
      product_price: 106,
    },
    {
      id: 16,
      product_photo: sneaker24,
      product_description: "adidas Originals Men's X_PLR Running Shoe",
      product_price: 89,
    },
  ];
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
  const similarProducts = products.slice(0, 6);

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
  }

  return (
    <Context.Provider
      value={{
        toggleCart,
        setToggleCart,
        products,
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
        similarProducts,
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
