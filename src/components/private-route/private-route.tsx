import { Navigate } from 'react-router-dom';
import { Path } from '../../constants';

type PrivateRouteProps = {
  isAuth: boolean;
  children: JSX.Element;
};

function PrivateRoute({ isAuth = false, children }: PrivateRouteProps) {
  if (isAuth) {
    return children;
  }

  return <Navigate to={Path.LOGIN} />;
}

export default PrivateRoute;
