import React from "react";
import styles from "./information.module.css";

const Information = () => {
  return (
    <div className={styles.info}>
      <h1 className={styles.info__topic}>Delicious Food, Delivered To You</h1>
      <p className={styles.info__text}>
        Choose your favorite meal from our brand selection of available meals
        and enjoy a delicious lunch or dinner at home
      </p>
      <p className={styles.info__text}>
        All our meals are cooked with high-quality ingredients,just-in-time and
        of course by experents chefs!
      </p>
    </div>
  );
};

export default Information;
