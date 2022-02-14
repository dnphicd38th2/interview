import React from "react";
import { categories } from "../data.js";
import styles from "../styles/Categories.module.css";
import CategoryItem from "../component/CategoryItem";
const Categories = () => {
  return (
    <div className={styles.container}>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
