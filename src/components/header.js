import React from "react";
import CartButton from "./CartButton";
import styles from "./header.module.css";
const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__topic}>ReactMeals</h1>
      <CartButton />
    </header>
  );
};
export default Header;
