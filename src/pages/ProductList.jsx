import Announcement from "../component/Announcement";
import Footer from "../component/Footer";
import Newsletter from "../component/Newsletter";
import Products from "../component/Products";
import styles from "../styles/ProductList.module.css";
import { useLocation } from "react-router";

import { useState } from "react";
const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [sort, setSort] = useState("newest");
  const [filters, setFilters] = useState({}); //{}
  // const [extraFilters, setExtraFilters] = useState([]); //[]

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, [e.target.name]: value });
  };
  // const handleAdd = () => {
  //   console.log("click");
  //   setExtraFilters((prev) => [...prev, filters]);
  // };
  return (
    <div className={styles.container}>
      <Announcement />
      <h1 className={styles.title}>{cat}</h1>
      <div className={styles.filterContainer}>
        <div className={styles.filter}>
          <h3 className={styles.filterText}>Filter Products:</h3>
          <select
            className={styles.filterSelect}
            name="color"
            onChange={handleFilters}
          >
            <option className={styles.filterOption} disabled>
              Color
            </option>
            <option className={styles.filterOption}>white</option>
            <option className={styles.filterOption}>black</option>
            <option className={styles.filterOption}>red</option>
            <option className={styles.filterOption}>blue</option>
            <option className={styles.filterOption}>yellow</option>
            <option className={styles.filterOption}>green</option>
            <option className={styles.filterOption}>gray</option>
          </select>
          <select
            className={styles.filterSelect}
            name="size"
            onChange={handleFilters}
          >
            <option className={styles.filterOption} disabled>
              Size
            </option>
            <option className={styles.filterOption}>XS</option>
            <option className={styles.filterOption}>S</option>
            <option className={styles.filterOption}>M</option>
            <option className={styles.filterOption}>L</option>
            <option className={styles.filterOption}>XL</option>
          </select>
        </div>
        <div className={styles.filter}>
          <h3 className={styles.filterText}>Sort Products:</h3>
          <select
            className={styles.filterSelect}
            onChange={(e) => setSort(e.target.value)}
          >
            <option className={styles.filterOption} value="newest">
              Newest
            </option>
            <option className={styles.filterOption} value="asc">
              Price (asc)
            </option>
            <option className={styles.filterOption} value="desc">
              Price (des)
            </option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
