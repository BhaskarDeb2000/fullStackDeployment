import React, { useState, useEffect } from "react";
import axios from "axios";

const ItemList = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    const fetchItem = async () => {
      const res = await axios.get(
        "https://full-stack-deployment-sandy.vercel.app/shop"
      );
      setItem(res.data.eCommerce);
    };
    fetchItem();
  }, []);
  return (
    <div>
      {item?.map((i, index) => (
        <p key={index}>{i.item}</p>
      ))}
    </div>
  );
};
export default ItemList;
