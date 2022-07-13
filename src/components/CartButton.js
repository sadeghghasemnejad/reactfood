import React, { useContext, useState, useEffect } from "react";
import DataContext from "../context/DataContext";
import styles from "./CartButton.module.css";
import ReactDOM from "react-dom";
const Overlay = () => {
  return <div className={styles.overlay}></div>;
};
const Box = (props) => {
  const [temp, setTemp] = useState(0);
  const ctx = useContext(DataContext);
  const releaseHandler = (e) => {
    const id = +e.target.closest(`.${styles["cartbox__foods--right"]}`).dataset
      .id;
    setTemp(temp + 1);
    props.onRelease(id);
  };
  const addHandler = (e) => {
    const id = +e.target.closest(`.${styles["cartbox__foods--right"]}`).dataset
      .id;
    setTemp(temp + 1);
    props.onAdd(id);
  };
  return (
    <div className={styles.cartbox}>
      {ctx.cData.map((e) => {
        return (
          <div key={e.id} className={styles.cartbox__foods}>
            <div className={styles["cartbox__foods--left"]}>
              <h3 className={styles["cartbox__foods--left--name"]}>{e.name}</h3>
              <div className={styles["cartbox__foods--left--content"]}>
                <p className={styles["cartbox__foods--left--content--price"]}>
                  ${e.price}
                </p>
                <p className={styles["cartbox__foods--left--content--amount"]}>
                  × {e.amount}
                </p>
              </div>
            </div>
            <div className={styles["cartbox__foods--right"]} data-id={e.id}>
              <p
                className={styles["cartbox__foods--right--btn"]}
                onClick={releaseHandler}
              >
                -
              </p>
              <p
                className={styles["cartbox__foods--right--btn"]}
                onClick={addHandler}
              >
                +
              </p>
            </div>
          </div>
        );
      })}
      <div className={styles["cartbox__total-amount"]}>
        <p>Total Amount</p>
        <p>
          $
          {props.data.reduce((acc, e) => {
            return +(+e.price * +e.amount + acc).toFixed(2);
          }, 0)}
        </p>
      </div>
      <div className={styles["cartbox__buttons"]}>
        <button
          className={styles["cartbox__buttons--close"]}
          onClick={props.onClose}
        >
          Close
        </button>
        <button className={styles["cartbox__buttons--order"]}>Order</button>
      </div>
    </div>
  );
};

const CartButton = () => {
  const [show, setShow] = useState(false);
  const ctx = useContext(DataContext);
  const amount = ctx.amount;
  const showHandler = () => {
    show ? setShow(false) : setShow(true);
  };
  const addHandler = (id) => {
    const oldAmount = +ctx.cData[id].amount;
    ctx.rAndAHandler(+oldAmount + 1, id);
    console.log(ctx.cData);
  };
  const releaseHandler = (id) => {
    const oldAmount = +ctx.cData[id].amount;
    if (!oldAmount > 0) return;
    ctx.rAndAHandler(+oldAmount - 1, id);
  };
  return (
    <>
      <div
        className={`${styles.header__cartbtn}`}
        id="cart"
        onClick={showHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.cartbtn__icon}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <p className={styles.cartbtn__text}>Your Cart</p>
        <p className={styles.cartbtn__count}>{amount}</p>
        {show &&
          ReactDOM.createPortal(
            <Overlay />,
            document.getElementById("overlay")
          )}
      </div>
      {show &&
        ReactDOM.createPortal(
          <Box
            data={ctx.cData}
            onClose={showHandler}
            onAdd={addHandler}
            onRelease={releaseHandler}
          />,
          document.getElementById("cartbox")
        )}
    </>
  );
};
export default CartButton;
