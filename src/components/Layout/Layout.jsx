import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { fetchDataThunk } from '../../store/Slice/productSlice'
import { fetchWishlistThunk } from '../../store/Slice/favoriteSlice'
const Layout = () => {

  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(fetchDataThunk())
    dispatch(fetchWishlistThunk())

  }, [])
  // }, [fetchDataThunk, fetchWishlistThunk])
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Layout
