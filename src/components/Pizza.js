import React, { useContext } from "react";
import { FoodContext } from "../App";

function Pizza() {
  let context = useContext(FoodContext);
  console.log(context);
  return <div>Pizza Works</div>;
}

export default Pizza;
