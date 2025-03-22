import { configureStore} from "@reduxjs/toolkit";
import productsSlice from './Slice/productSlice.jsx';
import favoriteSlice from './Slice/favoriteSlice.jsx'
import authReducer from './Slice/authSlice.jsx'


const store = configureStore({
  reducer:{
    products: productsSlice.reducer,
    favourts:favoriteSlice,
    auth: authReducer

  }
});

export default store;
