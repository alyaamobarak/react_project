import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useMemo } from "react";
import { removeFromWishlistThunk } from '../../store/Slice/favoriteSlice';
import { useNavigate } from "react-router-dom";
// import { FaHeart } from "react-icons/fa";
import "./Faviroute.css";
const Faviroute = () => {
  const favourte = useSelector((state) => state.favourts?.items || []);
  const [fav, setFav] = useState([])

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    setFav(favourte)
    console.log("favourte : ", favourte);
  }, [favourte])

  // useEffect(() => {
  //   dispatch(fetchWishlistThunk());
  // }, [dispatch]);
  //useMemo
  const totalPrice = useMemo(() => {
    let tPrice = 0;
    fav.forEach((prd) => {
      console.log("Product:", prd); 
      if ( prd.price) {
        const price = Number(prd.price.replace(/[^0-9.]/g, ""));
          tPrice += price;
      }
    });
    return tPrice;
  }, [fav]);

  const handleDelFromWishlist = (id) => {
    dispatch(removeFromWishlistThunk(id));
  };
  return (
<div className="m-5">
  <div className="text-center mb-4">
    {/* <h2>Favourite <FaHeart className="text-danger h2icon" /></h2> */}
    <h2 className="h2h2">Wishlist</h2>
  </div>

  {fav.length === 0 ? (
    <p className="text-danger m-5">No items in your wishlist!</p>
  ) : (
    <div className="row wdithcont">
      {fav.map((prd) => (
        <div key={prd.id} className="col-md-4" onClick={() => navigate(`/details/${prd.id}`)}>
          <div className="h-100 position-relative ">
            <img
              src={prd.image}
              alt={prd.title}
              className="card-img-top imsize"
            />

            <div
              className="favorite-ico"
              onClick={(e) => {
                e.stopPropagation();
                handleDelFromWishlist(prd.id);
              }}
            >
              <img
                src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dwff734d40/images/wishlist.svg"
                alt="wishlist-icon"
                className="wishlist-icon"
              />
            </div>
            <div className="d-flex flex-column justify-content-between takeph">
              <h5 className="card-title">{prd.title}</h5>
              <p className="ppar">${prd.price}</p>
            </div>
          </div>
        </div>
      ))}

      <h3 className="mt-4">Total Price: $EGP {totalPrice.toFixed(2)}</h3>
    </div>
  )}
</div>

  )
};

export default Faviroute;
