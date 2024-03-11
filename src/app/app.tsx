import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/main/main';
import NotFound from '../pages/not-found/not-found';
import Offer from '../pages/offer/offer';
import Login from '../pages/login/login';
import Favorites from '../pages/favorites/favorites';
import { AppRoute } from '../constants';
import PrivateRoute from '../components/private-route/private-route';
import Layout from '../components/layout/layout';
import { getAuthorizationStatus } from '../authorizationStatus';
import { OfferType } from '../mocks/offers';

interface AppProps {
  offers: OfferType[];
}

function App({ offers }: AppProps) {
  const authorizationStatus = getAuthorizationStatus();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.MAIN} element={<Layout />}>
          <Route index element={<Main offers={offers} />} />
          <Route
            path={AppRoute.LOGIN}
            element={
              <PrivateRoute authStatus={authorizationStatus} isReverse>
                <Login />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.FAVS}
            element={
              <PrivateRoute authStatus={authorizationStatus}>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.OFFER} element={<Offer />} />
          <Route path={AppRoute.NOT_FOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
