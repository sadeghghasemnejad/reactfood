import React, { useRef, useContext } from "react";
import DataContext from "../context/DataContext";
import styles from "./Cart.module.css";
import "./animated.css";
const Cart = (props) => {
  const addToCartHandler = () => {
    const data = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: +amountRef.current.value,
    };
    amountRef.current.value = 1;
    sctx.cartData.push(data);
    sctx.changeAmountHandler(data);
    document.querySelector("#cart").classList.add(`animated`);
    setTimeout(() => {
      document.querySelector("#cart").classList.remove(`animated`);
    }, 100);
    // props.onChangeAmount();
  };

  const sctx = useContext(DataContext);
  const amountRef = useRef();
  return (
    <div className={styles.cart}>
      <div className={styles.cart__content}>
        <h3 className={styles["cart__content--name"]}>{props.name}</h3>
        <p className={styles["cart__content--description"]}>
          {props.description}
        </p>
        <p className={styles["cart__content--price"]}>{`$${props.price}`}</p>
      </div>
      <div className={styles.cart__add}>
        <div className={styles["cart__add--amount"]}>
          <label
            htmlFor="amount"
            className={styles["cart__add--amount--label"]}
          >
            Amount
          </label>
          <input
            id="amount"
            type="number"
            className={styles["cart__add--amount--input"]}
            min="1"
            ref={amountRef}
          />
        </div>
        <button
          className={styles["cart__add--button"]}
          onClick={addToCartHandler}
        >
          +Add
        </button>
      </div>
    </div>
  );
};

export default Cart;
