import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PassContextParams } from '../authContext/ContextPass';
import Loading from '../components/loading/Loading';

const Private = ({ children }) => {
  const { user, loading } = useContext(PassContextParams);
  const location = useLocation();

  if (loading) {
    return (
      <>
        <Loading></Loading>
      </>
    );
  }
  if (user) {
    return children;
  } else {
    return (
      <Navigate
        to={'/signin'}
        state={{ from: location }}
        replace={true}
      ></Navigate>
    );
  }
};

export default Private;
