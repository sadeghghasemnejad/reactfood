import React from "react";
import styles from "./picture.module.css";
import rsetaurant from "./../../images/pexels-chan-walrus-958545.jpg";
const Picture = () => {
  return (
    <div className={styles.picture}>
      <img src={rsetaurant} className={styles.pic}></img>
    </div>
  );
};

export default Picture;
