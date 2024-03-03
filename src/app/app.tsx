import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/main/main';
import NotFound from '../pages/not-found/not-found';
import Offer from '../pages/offer/offer';
import Login from '../pages/login/login';
import Favorites from '../pages/favorites/favorites';
import { Path } from '../constants';
import PrivateRoute from '../components/private-route/private-route';

interface AppProps {
  rentNumber: number;
}

function App({ rentNumber }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.MAIN} element={<Main rentNumber={rentNumber} />} />
        <Route path={Path.LOGIN} element={<Login />} />
        <Route
          path={Path.FAVS}
          element={
            <PrivateRoute isAuth={false}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path={Path.OFFER} element={<Offer />} />
        <Route path={Path.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
