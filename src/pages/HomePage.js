import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { LatestRelease } from "../components/page-components/LatestRelease";
import { Membership } from "../components/page-components/Membership";
import { ShopHere } from "../components/page-components/ShopHere";
import { Trending } from "../components/page-components/Trending";
import { MainLayout } from "../layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAction } from "../components/redux/products-redux/productAction";
import { getAllCategoriesAction } from "../components/redux/category/categoryAction";

const HomePage = () => {

  const {products} = useSelector((state) => state.product)
const {cats} = useSelector((state)=> state.category)

// console.log(cats)
//   console.log(products )
const dispatch = useDispatch()

useEffect(()=> {
  dispatch(getAllProductsAction())
  dispatch(getAllCategoriesAction())

  }, [dispatch])
  return (
    <MainLayout>
      <div className="hero">
        <div className="mt-5 d-flex flex-column gap-2 justify-content-center align-items-center">
          <h1 className="fw-bold ">Unleash your inner rebel</h1>

          <h5 className="mt-4 mb-5">
            All latest streetware stuff available here.
          </h5>
          <Button variant="dark" href="#shopnow" className="rounded fw-bold">
            Shop Now!
          </Button>
        </div>
      </div>
      <ShopHere />
      <Trending />
      {/* <LatestRelease />  */}
      <Membership />
    </MainLayout>
  );
};

export default HomePage;
