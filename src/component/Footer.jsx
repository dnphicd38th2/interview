import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.logo}>PhiDang.</h1>
        <p className={styles.desc}>
          There are many variations of passages of Lorem Ipsum available. but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even sightly believable
        </p>
        <div className={styles.iconContainer}>
          <div className={styles.icon} style={{ color: "#3b5999" }}>
            <Facebook />
          </div>
          <div className={styles.icon} style={{ color: "#E4405F" }}>
            <Twitter />
          </div>
          <div className={styles.icon} style={{ color: "#55ACEE" }}>
            <Instagram />
          </div>
          <div className={styles.icon} style={{ color: "#E60023" }}>
            <Pinterest />
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <h3 className={styles.title}>Useful Link</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Main Fashion</li>
          <li className={styles.listItem}>Accessories</li>
          <li className={styles.listItem}>Order Tracking</li>
          <li className={styles.listItem}>Wishlist</li>
          <li className={styles.listItem}>Cart</li>
          <li className={styles.listItem}>Women Fashion</li>
          <li className={styles.listItem}>My Account</li>
          <li className={styles.listItem}>Hot Products</li>
          <li className={styles.listItem}>Terms</li>
        </ul>
      </div>
      <div className={styles.right}>
        <h3 className={styles.title}>Contact</h3>
        <div className={styles.contactItems}>
          <Room style={{ marginRight: "10px" }} />
          Tp HCM
        </div>
        <div className={styles.contactItems}>
          <Phone style={{ marginRight: "10px" }} />
          078 898 6672
        </div>
        <div className={styles.contactItems}>
          <MailOutline style={{ marginRight: "10px" }} />
          dnphicd38th2@gmail.com
        </div>
        <img
          className={styles.payment}
          alt=""
          src="https://i.ibb.co/Qfvn4z6/payment.png"
        />
      </div>
    </div>
  );
};

export default Footer;
