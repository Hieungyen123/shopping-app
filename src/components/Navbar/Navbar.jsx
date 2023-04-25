import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from './Navbar.module.scss'
import {Link} from 'react-router-dom'

import Cart from "../Cart/Cart";



import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import shop from '../../img/shop.png'

import { useSelector} from "react-redux"

function Navbar() {

    const cx = classNames.bind(styles)
    const [open, setOpen] = useState(false)
    const products = useSelector(state => state.cart.products)


    return (  
        <div className={cx('Navbar')}>
            <div className={cx('Wrapper')}>
                <div className={cx('left')}>
                    <div className={cx('item')}>
                        <img src={shop} alt="err" />
                        <KeyboardArrowDownIcon/>
                    </div> 
                    <div className={cx('item')}>
                        <span>USD</span>
                        <KeyboardArrowDownIcon/>
                    </div>
                    <div className={cx('item')}><Link className={cx('link')} to="/products">Products</Link></div>
                </div>
                <div className={cx('center')}>
                    {/* <Link className={cx('link')} to="/" >Unowned Store</Link> */}
                </div>
                <div className={cx('right')}>
                    <div className={cx('item')}><Link className={cx('link')} to="/">HomePage</Link></div>
                    <div className={cx('icons')}>
                        <SearchIcon/>
                        <PersonOutlineOutlinedIcon/>
                        <FavoriteBorderOutlinedIcon/>
                        <div className={cx('cart-icon')}>
                            <ShoppingCartOutlinedIcon  onClick = {() => setOpen(!open)} />
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart/>}
        </div>
    );
}

export default Navbar;
