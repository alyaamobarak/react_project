import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Favorites from './../../screens/Faviroute/Faviroute';

const ProtectedRoute = () => {
  const userAuth = useSelector((state) => state.auth?.userAuth);

  if (!userAuth) {
    alert('Please log in first!');
    return <Navigate to="/login" />;
  }

  return <Favorites />;
};

export default ProtectedRoute;
