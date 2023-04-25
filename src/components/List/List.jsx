import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./List.module.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

function List({url, API , maxPrice,filter }) {
  
  const cx = classNames.bind(styles);
  const [newdata ,setNewData] = useState([]);
    const { data, loading} = useFetch(
      url
    );

      
    

     useEffect(() => {
      if(data.length > 0) {
        setNewData(data.filter((item) => item.price <= maxPrice && item.title.toLowerCase().includes(filter.toLowerCase())))
      }
      
     },[maxPrice,data,filter])
    //  console.log(data)
    //  console.log(newdata)

  return (
    <div className={cx("list")}>
      {loading 
        ? "loading..." 
        : data.length > 0 
          ? newdata?.map((item) => <Card item={item} key={item.id} />) 
          : data?.map((item) => <Card item={item} key={item.id} /> )
      }
    </div>
  );
}

export default React.memo(List);
