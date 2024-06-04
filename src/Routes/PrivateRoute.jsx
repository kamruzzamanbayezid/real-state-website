import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';

const PrivateRoute = ({ children }) => {

      const { user, loading } = UseAuth();
      const location = useLocation();

      if (loading) {
            return <div className='flex items-center justify-center'><img src="https://i.ibb.co/SsF2Lb0/loading-7528-256.gif" alt="" /></div>
      }

      if (user) {
            return children
      }

      return <Navigate to='/login' state={location?.pathname} />;
};

PrivateRoute.propTypes = {
      children: PropTypes.node
};

export default PrivateRoute;