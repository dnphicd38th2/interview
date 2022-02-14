import styles from "../styles/ProductPage.module.css";
import { Add, Remove } from "@material-ui/icons";
import Announcement from "../component/Announcement";
import Footer from "../component/Footer";
import Newsletter from "../component/Newsletter";
import Navbar from "../component/Navbar";

import { publicRequest } from "../requestMethods";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";
const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  console.log("color", color);
  console.log("size", size);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      console.log("+++");
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      console.log("---");
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <div className={styles.container}>
      <Announcement />
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <img alt="" src={product.img} className={styles.image} />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.titleContainer}>Denim Jumpsuit</div>
          <div className={styles.descContainer}>{product.desc}</div>
          <div className={styles.priceContainer}>{product.price}</div>
          <div className={styles.filterContainer}>
            <div className={styles.filter}>
              <h3 className={styles.filterTitle}>Color</h3>
              {product.color?.map((c) => (
                <div
                  className={styles.filterColor}
                  style={{ backgroundColor: "" + c }}
                  key={c}
                  onClick={() => setColor(c)}
                />
              ))}
            </div>
            <div className={styles.filter}>
              <h3 className={styles.filterTitle}>Size</h3>
              <select
                className={styles.filterSelect}
                onChange={(e) => setSize(e.target.value)}
              >
                {product.size?.map((item) => (
                  <option key={item} className={styles.filterOption}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.addContainer}>
            <div className={styles.amountContainer}>
              <Remove onClick={() => handleQuantity("dec")} />
              <span className={styles.amount}>{quantity}</span>
              <Add onClick={() => handleQuantity("inc")} />
            </div>
            <button
              type="button"
              className={styles.buttonAdd}
              onClick={handleClick}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
