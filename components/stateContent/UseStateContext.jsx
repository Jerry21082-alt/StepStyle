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
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [notifyMsg, setNotifyMsg] = useState("");
  const [notify, setNotify] = useState(false);
  const [watchList, setWatchList] = useLocalStorage("watchList", []);
  const [recentlyViewed, setRecentlyViewed] = useLocalStorage(
    "recentlyViewed",
    []
  );

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

  const finishOrder = () => {
    setOrderSuccess(false);
  };

  const products = [
    {
      id: 1,
      name: "Nike Air Max 90",
      brand: "Nike",
      price: 120,
      description:
        "Iconic sneaker with visible Air cushioning, known for its comfort and style.",
      color: "White/Black/Red",
      releaseDate: "2022-03-15",
      photos: {
        main: "sneakers/nikes/arimax90main.png",
        others: [
          "sneakers/nikes/air-max-90-mens-shoes-6n3vKB.jpg",
          "sneakers/nikes/air-max-90-mens-shoes-6n3vKB.png",
        ],
      },
    },
    {
      id: 2,
      name: "Adidas Stan Smith",
      brand: "Adidas",
      price: 80,
      description:
        "Classic tennis shoe featuring a minimalist design and leather upper.",
      color: "White/Green",
      releaseDate: "2021-12-10",
      photos: {
        main: "sneakers/adidas/adidasstansmithmain.png",
        others: [
          "sneakers/adidas/3 (1).jpg",
          "sneakers/adidas/4 (1).jpg",
        ],
      },
    },
    {
      id: 3,
      name: "Converse Chuck 70",
      brand: "Converse",
      price: 70,
      description:
        "Timeless silhouette with premium materials and cushioned footbed.",
      color: "Black/White",
      releaseDate: "2022-01-20",
      photos: {
        main: "sneakers/converce/nb570main.png",
        others: ["sneakers/converce/A09848C_E_08X1.jpg"],
      },
    },
    {
      id: 4,
      name: "Vans Old Skool",
      brand: "Vans",
      price: 60,
      description:
        "Classic skate shoe featuring a durable canvas and suede upper.",
      color: "Black/White",
      releaseDate: "2021-11-05",
      photos: {
        main: "sneakers/vans/vansoldschoolmain.png",
        others: ["sneakers/vans/3400517270m4_zm.jpg"],
      },
    },
    {
      id: 5,
      name: "New Balance 574",
      brand: "New Balance",
      price: 85,
      description:
        "Heritage-inspired sneaker with ENCAP cushioning and durable materials.",
      color: "Grey/Navy",
      releaseDate: "2022-02-28",
      photos: {
        main: "sneakers/nb/nbmaini.png",
        others: ["sneakers/nb/ml574evg_nb_02_i.webp"],
      },
    },
    {
      id: 6,
      name: "Puma Suede Classic",
      brand: "Puma",
      price: 65,
      description:
        "Timeless design with suede upper and Puma Formstrip branding.",
      color: "Black/White",
      releaseDate: "2021-10-12",
      photos: {
        main: "sneakers/puma/pumasuedemain.png",
        others: [
          "sneakers/puma/Suede-Classic-XXI-Sneakers (2).avif",
          "sneakers/puma/Suede-Classic-XXI-Sneakers.avif",
        ],
      },
    },
    {
      id: 7,
      name: "Reebok Classic Leather",
      brand: "Reebok",
      price: 75,
      description:
        "Iconic silhouette with soft leather upper and cushioned midsole.",
      color: "White/Gum",
      releaseDate: "2021-09-25",
      photos: {
        main: "sneakers/reebok/reebokclassicmain.png",
        others: [
          "sneakers/reebok/7135cV87KJL._AC_SX395_.jpg",
          "sneakers/reebok/71QvHMe3JsL._AC_SX395_.jpg",
        ],
      },
    },
    {
      id: 8,
      name: "Jordan 1 Retro High",
      brand: "Jordan",
      price: 170,
      description:
        "Legendary basketball sneaker with iconic Air Jordan wings logo.",
      color: "Black/Red",
      releaseDate: "2021-08-17",
      photos: {
        main: "sneakers/nikes/airjordanmain.png",
        others: [
          "sneakers/nikes/air-jordan-1-retro-high-og-black-white-mens-shoes-Tz18l4 (2).jpg",
          "sneakers/nikes/air-jordan-1-retro-high-og-black-white-mens-shoes-Tz18l4.jpg",
        ],
      },
    },
    {
      id: 9,
      name: "ASICS Gel-Lyte III",
      brand: "ASICS",
      price: 100,
      description:
        "Classic running shoe with split tongue construction and GEL cushioning.",
      color: "Grey/Blue",
      releaseDate: "2022-04-03",
      photos: {
        main: "sneakers/asics/asicmaini.png",
        others: [
          "sneakers/asics/61psYKhhsdL._AC_SY395_.jpg",
          "sneakers/asics/61zuuz2tWbL._AC_SY395_.jpg",
        ],
      },
    },
    {
      id: 10,
      name: "Under Armour Curry 8",
      brand: "Under Armour",
      price: 160,
      description:
        "Signature basketball shoe designed for Stephen Curry, featuring responsive cushioning.",
      color: "Blue/Gold",
      releaseDate: "2022-05-20",
      photos: {
        main: "sneakers/underAmour/underamourmain.png",
        others: [
          "sneakers/underAmour/61T142XhUeL._AC_SY395_.jpg",
          "sneakers/underAmour/711tY7Rts6L._AC_SY395_.jpg",
        ],
      },
    },
    {
      id: 11,
      name: "Saucony Jazz Original",
      brand: "Saucony",
      price: 70,
      description:
        "Retro-inspired sneaker with suede and nylon upper, known for its comfort.",
      color: "Grey/White",
      releaseDate: "2021-07-08",
      photos: {
        main: "sneakers/Saucony/71Oy-8hbAqL._AC_SX395_.jpg",
        others: ["sneakers/Saucony/81YWMZIolLL._AC_SX395_.jpg"],
      },
    },
    {
      id: 12,
      name: "FILA Disruptor II",
      brand: "FILA",
      price: 65,
      description:
        "Chunky silhouette with leather upper and bold FILA branding.",
      color: "White/Navy/Red",
      releaseDate: "2021-06-15",
      photos: {
        main: "sneakers/fila/filamain.png",
        others: ["sneakers/fila/51kHV9dpWBL._AC_SY625_.jpg"],
      },
    },
    {
      id: 13,
      name: "Nike React Element 55",
      brand: "Nike",
      price: 130,
      description:
        "Modern sneaker with React foam cushioning for lightweight comfort and support.",
      color: "Black/White",
      releaseDate: "2021-03-30",
      photos: {
        main: "sneakers/nikes/reactElementmain.png",
        others: [
          "sneakers/nikes/custom-pegasus-trail-gtx-by-you (2).jpg",
          "sneakers/nikes/custom-pegasus-trail-gtx-by-you.jpg",
        ],
      },
    },
    {
      id: 14,
      name: "Adidas Superstar",
      brand: "Adidas",
      price: 90,
      description:
        "Iconic shell-toe sneaker with leather upper and classic rubber cupsole.",
      color: "White/Black",
      releaseDate: "2021-02-12",
      photos: {
        main: "sneakers/adidas/adidasstansmithmain.png",
        others: [
          "sneakers/adidas/3.jpg",
          "sneakers/adidas/4.jpg",
        ],
      },
    },
    {
      id: 15,
      name: "Vans Sk8-Hi",
      brand: "Vans",
      price: 75,
      description:
        "High-top skate shoe featuring a padded collar and signature waffle outsole.",
      color: "Black/White",
      releaseDate: "2021-01-05",
      photos: {
        main: "sneakers/vans/vanssk8main.png",
        others: ["sneakers/vans/3413646250m7_zm.jpg"],
      },
    },
    {
      id: 15,
      name: "Vans Sk8-Hi",
      brand: "Vans",
      price: 75,
      description:
        "High-top skate shoe featuring a padded collar and signature waffle outsole.",
      color: "Black/White",
      releaseDate: "2021-01-05",
      photos: {
        main: "sneakers/vans/vanssk8main.png",
        others: ["sneakers/vans/3413646250m7_zm.jpg"],
      },
    },
  ];

  const addToViewRecent = (product) => {
    const updatedRecent = [...recentlyViewed];
    const itemToAdd = updatedRecent.some((item) => item.id === product.id);

    if (!itemToAdd) {
      updatedRecent.push(product);
      if (updatedRecent.length > 5) {
        updatedRecent.splice(updatedRecent.length - 1, 1);
      }
    }

    setRecentlyViewed(updatedRecent);
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
        openMobileNav,
        setOpenMobileNav,
        watchList,
        setWatchList,
        recentlyViewed,
        setRecentlyViewed,
        addToViewRecent,
        recentlyViewed,
        setRecentlyViewed,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const stateFunc = () => useContext(Context);
