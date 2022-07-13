import React from "react";
import styles from "./main.module.css";
import Picture from "./ui/picture";
import Information from "./ui/information";
import Carts from "./Carts";
const Main = (props) => {
  // const changeAmountHAndler = () => {
  //   props.onChangeAmount();
  // };
  return (
    <main>
      <Picture />
      <Information />
      <Carts />
    </main>
  );
};

export default Main;
