import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "../card/ProductCard";

export const Slide1 = () => {
  const { products } = useSelector((state) => state.product);
  // console.log(products);
  const [randomP, setRandomP] = useState([]);

  useEffect(() => {
    getRandomProducts();
  }, [products]);

  const getRandomProducts = () => {
    const randomProducts = [];
    while (randomProducts.length < 3) {
      const selectedP = products[Math.floor(Math.random() * products.length)];

      const isExist = randomProducts.find((p) => p?._id === selectedP?._id);

      !isExist && randomProducts.push(selectedP);
    }
    setRandomP(randomProducts);
  };

  return (
    <div className="d-flex justify-content-center align-items-center gap-5">
      {
        // randomProducts.length > 0 &&
        // abc?.map((item, i) => (
        randomP?.map((item, i) => (
          <ProductCard key={i} {...item} />
        ))
      }
    </div>
  );
};
