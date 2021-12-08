import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Pizza from "./components/Pizza";
import Burger from "./components/Burger";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Header from "./components/Header";

export const FoodContext = React.createContext();

const url = "https://fod-app.herokuapp.com";

function App() {
  let [data, setData] = useState([]);
  let [cart, setCart] = useState([]);
  let [cartValue, setcartValue] = useState(cart.length);

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let res = await axios.get(`${url}/food`);
    console.log(res.data);
    setData(res.data);
  };

  return (
    <>
      <Router>
        <FoodContext.Provider
          value={{ data, cart, setCart, cartValue, setcartValue, url }}
        >
          <Header />
          <Routes>
            <Route path="/pizza" element={<Pizza />} />
            <Route path="/burger" element={<Burger />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </FoodContext.Provider>
      </Router>
    </>
  );
}

export default App;
