import React from "react";
import classNames from "classnames/bind";
import styles from './Cart.module.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import {useDispatch, useSelector} from "react-redux"
import { Link } from "react-router-dom";
import { removeItem, resetCart } from "../../redux/cartReducer";
function Cart() {
    
    const cx = classNames.bind(styles)
    const products = useSelector(state => state.cart.products)
    const total = () => {
        let total = 0;
        products.forEach(item => {
            total += item.quantity * item.price
            console.log("..",item.quantity * item.price)
        });
        return total.toFixed(2)
    }
    
    const dispatch = useDispatch()
    return (  
        <div className={cx('cart')}> {!products.length ? <div className={cx('null')}  ><p>Not have any thing in your cart</p></div> :  (
            <>
                <h1>Products in your cart</h1>
                {products.map(item =>  (
                    <div className={cx('item')} key={item.id}>
                        <img src={item.img} key={item.id} alt="" />   
                        <div className={cx('details')}>
                            <Link className={cx('link')} to={`/product/${item.id}`}>
                                <h1>{item.title}</h1>
                            </Link>
                            <p>{item.decs?.substring(0,100)}</p>
                            <div className={cx('price')}> {item.quantity} x {item.price}$</div>
                        </div> 
                        <DeleteOutlinedIcon className={cx('delete')} onClick={() => dispatch(removeItem(item.id))} />
                    </div>
                ))}
                <div className={cx('total')}>
                    <span>sub total</span>
                    <span>{total()} $</span>
                </div>
                <button>Checkout</button>
                <span className={cx('reset')} onClick={() => dispatch(resetCart())}>reset cart</span>
            </>)}
        </div>
    );
    
}

export default Cart;
