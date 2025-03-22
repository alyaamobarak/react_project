// import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addToWishlistThunk, fetchWishlistThunk } from './../../store/Slice/favoriteSlice';
import "./ProductCard.css";

const ProductCard = ({ prd }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const wishlist = useSelector((state) => state.favourts.items || []);

  // useEffect(() => {
  //   dispatch(fetchWishlistThunk());
  // }, [dispatch]);

  const handleAddToWishlist = async () => {
    const isInWishlist = wishlist.find((item) => item.id === prd.id);
    if (!isInWishlist) {
      await dispatch(addToWishlistThunk(prd));
      dispatch(fetchWishlistThunk()); 
      alert("Product added to wishlist!");
    } else {
      alert("Product is already in the wishlist!");
    }
  };

  const isInWishlist = wishlist.find((item) => item.id === prd.id);

  return (
    <div key={prd.id} className="col-md-4" onClick={() => navigate(`/details/${prd.id}`)}>
      <div className="h-100 position-relative">
        <img src={prd.image} alt={prd.title} className="card-img-top" />

        <div
          className="favorite-icon"
          onClick={(e) => {
            e.stopPropagation();
            handleAddToWishlist();
          }}
        >
          <img
            src={
              isInWishlist
                ? "https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dwff734d40/images/wishlist.svg"
                : "https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw0a0ed470/images/wishlist-empty.svg"
            }
            alt="wishlist-icon"
            className="wishlist-icon"
          />
          </div>

        <div className=" d-flex flex-column justify-content-between takeph">
          <h5 className="card-title">{prd.title}</h5>
          <p className="ppar">${prd.price}</p>
          {/* <button className="btnView">View Details</button> */}
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
