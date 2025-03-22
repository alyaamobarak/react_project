import Footer from './../../components/Footer/Footer';
import ProductCard from './../../components/ProductCard/ProductCard'
import { useSelector,useDispatch } from "react-redux";
import {fetchWishlistThunk } from './../../store/Slice/favoriteSlice';
import { useEffect } from "react";

import './Products.css'

const Products = () => {
  const products = useSelector((state) => state.products.items)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWishlistThunk());
  }, [dispatch]);
  
  return (
    <>
    <div className="container mt-5">
      <div className="row g-4">
        {products.map((prd) => (
          <ProductCard key={prd.id} prd={prd}/>
        ))}
      </div>
    </div>
    <Footer/>
     </>
  );
};

export default Products;
