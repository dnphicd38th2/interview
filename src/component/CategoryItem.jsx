import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/CategoryItem.module.css";
const CategoryItem = ({ item }) => {
  return (
    <div className={styles.container}>
      <Link to={`products/${item.cat}`}>
        <img alt="" src={item.img} className={styles.image} />
        <div className={styles.info}>
          <h1 className={styles.title}>{item.title}</h1>
          <button className={styles.button}>SHOP NOW</button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
