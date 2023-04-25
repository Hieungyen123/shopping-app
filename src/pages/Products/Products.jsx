import React, { useState, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Products.module.scss";
import List from "../../components/List/List";
// import { useParams } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";

function Products() {
  const cx = classNames.bind(styles);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [API, setApi] = useState("");
  const [filter, setFilter] = useState("");

  const typingTimeout = useRef();

  const handleChange = (e) => {
    const value = e.target.value;
    setApi(value);
  };
  const handleChangeAll = (e) => {
    setApi("");
  };

  const handleChangeSearch = (e) => {
    if (typingTimeout.current) {
      clearTimeout(typingTimeout.current);
    }
    typingTimeout.current = setTimeout(() => {
      setFilter(e.target.value);
    }, 300);
  };
  console.log(filter);

  return (
    <div className={cx("products")}>
      <div className={cx("left")}>
        <div className={cx("filter-Item")}>
          <h2>Product Categories</h2>

          <div className={cx("input-Item")}>
            <label htmlFor="filter">Search</label>
            <input
              placeholder="search"
              type="input"
              // value="filter"
              // id="filter"
              className={cx("search")}
              onChange={handleChangeSearch}
            />
          </div>

          <div className={cx("input-Item")}>
            <input
              name="category"
              type="radio"
              value="all"
              id="all"
              onChange={handleChangeAll}
            />
            <label htmlFor="all">all</label>
          </div>
          <div className={cx("input-Item")}>
            <input
              name="category"
              type="radio"
              value="jewelery"
              id="jewelery"
              onChange={handleChange}
            />
            <label htmlFor="jewelery">jewelery</label>
          </div>
          <div className={cx("input-Item")}>
            <input
              name="category"
              type="radio"
              value="women's%20clothing"
              id="women's clothing"
              onChange={handleChange}
            />
            <label htmlFor="women's clothing">women clothing</label>
          </div>
          <div className={cx("input-Item")}>
            <input
              name="category"
              type="radio"
              value="men's%20clothing"
              id="men's clothing"
              onChange={handleChange}
            />
            <label htmlFor="men's clothing">men clothing</label>
          </div>
          <div className={cx("input-Item")}>
            <input
              name="category"
              type="radio"
              value="electronics"
              id="electronics"
              onChange={handleChange}
            />
            <label htmlFor="electronics">electronics</label>
          </div>
        </div>

        <div className={cx("filter-Item")}>
          <h2>Filter by price</h2>
          <div className={cx("input-Item")}>
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
      </div>
      <div className={cx("right")}>
        <img
          className={cx("catImg")}
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        {API !== "" ? (
          <List
            url={`https://fakestoreapi.com/products/category/${API}`}
            maxPrice={maxPrice}
            filter={filter}
          />
        ) : (
          <List
            url={"https://fakestoreapi.com/products/"}
            maxPrice={maxPrice}
            filter={filter}
          />
        )}
      </div>
    </div>
  );
}

export default React.memo(Products);
