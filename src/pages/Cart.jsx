import Announcement from "../component/Announcement";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

import { useSelector } from "react-redux";
import styles from "../styles/Cart.module.css";

import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userRequest } from "../requestMethods";
const Cart = () => {
  const KEY =
    "pk_test_51KM3XHCfeyDR7Ku23FNEp6beZ77Ht6bVIn2N47oI5Y0btTqRzSuvuElnH9XO6iI9baeRXz9FWnsj3FEeoH3ia7c100LAdF53It";

  const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
      props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
  `;
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  let navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };
  console.log(stripeToken);
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        console.log("res", res);
        navigate("/success", { state: [cart, res.data] });
      } catch (error) {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, cart, navigate]);
  return (
    <div className={styles.container}>
      <Navbar />
      <Announcement />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>YOUR BAG</h1>
        <div className={styles.top}>
          <TopButton> CONTINUE SHOPPING</TopButton>
          <div className={styles.topTexts}>
            <span className={styles.topText}>Shopping Bag(2)</span>
            <span className={styles.topText}>Your Wishlist (0)</span>
          </div>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            {cart.products.map((item) => (
              <div className={styles.products} key={item._id}>
                <div className={styles.productDetail}>
                  <img className={styles.image} alt="" src={item.img} />
                  <div className={styles.detail}>
                    <div className={styles.productName}>
                      <b>Product: </b>
                      {item.title}
                    </div>
                    <div className={styles.productId}>
                      <b>Id: </b>
                      {item._id}
                    </div>
                    <div
                      className={styles.productColor}
                      style={{ backgroundColor: "" + item.color }}
                    />
                    <div className={styles.productSize}>
                      <b>Size: </b> {item.size}
                    </div>
                  </div>
                </div>
                <div className={styles.priceDetail}>
                  <div className={styles.priceAmount}>
                    <Add />
                    <div className={styles.productAmount}>{item.quantity}</div>
                    <Remove />
                  </div>
                  <div className={styles.productPrice}>
                    ${item.price * item.quantity}{" "}
                  </div>
                </div>
              </div>
            ))}
            <hr className={styles.hr} />
          </div>
          <div className={styles.right}>
            <h1 className={styles.rightTitle}>ORDER SUMMARY</h1>
            <div className={styles.rightItem}>
              <div className={styles.rightItemText}>Subtotal</div>
              <div className={styles.rightItemPrice}>$ {cart.total}</div>
            </div>
            <div className={styles.rightItem}>
              <div className={styles.rightItemText}>Estimated Shipping</div>
              <div className={styles.rightItemPrice}>$ 5.90</div>
            </div>
            <div className={styles.rightItem}>
              <div className={styles.rightItemText}>Shipping Discount</div>
              <div className={styles.rightItemPrice}>$ -5.90</div>
            </div>
            <div className={styles.rightItem}>
              <div className={styles.rightItemText}>Total</div>
              <div className={styles.rightItemPrice}>$ {cart.total}</div>
            </div>
            <StripeCheckout
              name="Phi Dang Shop"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <button className={styles.rightBtn}>CHECKOUT NOW</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
