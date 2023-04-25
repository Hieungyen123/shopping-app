import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";


function Product() {
  const cx = classNames.bind(styles);
  const id = useParams().id;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()

  const { data, loading } = useFetch(`https://fakestoreapi.com/products/${id}`);
  return (
    <div className={cx("product")}>
      {loading ? (
        "loadding.."
      ) : (
        <>
          <div className={cx("left")}>
            {/* <div className={cx('images')}>
                        <img src={data.image} alt="err" onClick={e => setSelectedImg(1)}/>
                    </div> */}
            <div className={cx("mainImg")}>
              <img src={data.image} alt="err" />
            </div>
          </div>
          <div className={cx("right")}>
            <h1>{data.title}</h1>
            <span className={cx("price")}>{data.price} $</span>
            <p>
              {data.description}
            </p>

            <div className={cx("quantity")}>
              <button onClick={() =>setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>

            <button className={cx("add")} onClick={() => dispatch(addToCart({
              id:data.id,
              title: data.title,
              desc: data.desc,
              img: data.image,
              price: data.price,
              quantity
            }))}>
              <AddShoppingCartIcon /> Add To Cart
            </button>
            <div className={cx("link")}>
              <div className={cx("item")}>
                <FavoriteBorderIcon /> add to wist list
              </div>
              <div className={cx("item")}>
                <BalanceIcon /> add to compare
              </div>
            </div>
            <div className={cx("info")}>
              <span>category: {data.category}</span>

            </div>
            <hr />
            <div className={cx("info")}>
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Product;
