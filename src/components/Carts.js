import React, { useContext } from "react";
import styles from "./carts.module.css";
import Cart from "./Cart";
import DataContext from "../context/DataContext";

const Carts = (props) => {
  // const changeAmountHandler = () => {
  //   props.onChangeAmount();
  // };
  const data = useContext(DataContext);
  return (
    <div className={styles.carts}>
      {data.data.map((ctx) => {
        return (
          <Cart
            key={ctx.name}
            id={ctx.id}
            name={ctx.name}
            description={ctx.descrip}
            price={ctx.price}
          />
        );
      })}
    </div>
  );
};

export default Carts;
