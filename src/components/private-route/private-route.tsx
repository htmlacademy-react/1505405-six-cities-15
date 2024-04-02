import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';

type IPrivateRoute = {
  authStatus: AuthorizationStatus;
  isReverse?: boolean;
  children: JSX.Element;
};

function PrivateRoute({
  authStatus,
  isReverse,
  children,
}: IPrivateRoute): JSX.Element {
  if (
    authStatus ===
    (isReverse ? AuthorizationStatus.NOT_AUTH : AuthorizationStatus.AUTH)
  ) {
    return children;
  }

  return <Navigate to={AppRoute.LOGIN} />;
}

export default PrivateRoute;
