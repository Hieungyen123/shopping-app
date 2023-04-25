import React from "react";
import classNames from "classnames/bind";
import styles from './Home.module.scss'

import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Categories from "../../components/Categories/Categories";
function Home() {

    const cx = classNames.bind(styles)
    return (  
        <div className={cx('home')}>
            <Slider/>
            <FeaturedProducts type="featured"/>
            <Categories/>
            <FeaturedProducts type="trending"/>
        </div>
    );
}

export default Home;
