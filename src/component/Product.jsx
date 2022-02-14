import React from "react";
import styles from "../styles/Product.module.css";
import { Link } from "react-router-dom";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
const Product = ({ item }) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} alt="" src={item.img} />
      <div className={styles.info}>
        <div className={styles.icon}>
          <FavoriteBorderOutlined />
        </div>
        <div className={styles.icon}>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </div>
        <div className={styles.icon}>
          <ShoppingCartOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
