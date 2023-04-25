import React from "react";
import classNames from "classnames/bind";
import styles from './Card.module.scss'
import { Link } from "react-router-dom";


function Card({item}) {

    const cx = classNames.bind(styles)
    return (  
        <Link className={cx('link')} to={`/product/${item.id}`}>
            <div className={cx('card')}>

                 <div className={cx('image')}>
                    <img src={item.image} alt="" className={cx('mainImg')}/>
                 </div>
                 <h2>{item?.title}</h2>
                 <div className={cx('prices')}>
                    <h3>{item.rating.count} </h3>
                    <h3>{item.price} $</h3>
                 </div>
            </div>
        </Link>
    );
}

export default Card;
