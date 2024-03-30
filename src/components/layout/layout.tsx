import { Link, Outlet, useLocation } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../constants';
import { getLayoutState } from './layout.utils';
import { getAuthorizationStatus } from '../../authorizationStatus';

function Layout(): JSX.Element {
  const { pathname } = useLocation();
  const { rootClassName, linkClassName, shouldRenderUser, shouldRenderFooter } =
    getLayoutState(pathname as AppRoute);
  const authorizationStatus = getAuthorizationStatus();

  return (
    <div className={`page${rootClassName}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                className={`header__logo-link${linkClassName}`}
                to={AppRoute.MAIN}
              >
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
            {shouldRenderUser ? (
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={AppRoute.FAVS}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      {authorizationStatus === AuthorizationStatus.AUTH ? (
                        <>
                          <span className="header__user-name user__name">
                            Oliver.conner@gmail.com
                          </span>
                          <span className="header__favorite-count">3</span>
                        </>
                      ) : (
                        <span className="header__login">Sign in</span>
                      )}
                    </Link>
                  </li>
                  {authorizationStatus === AuthorizationStatus.AUTH ? (
                    <li className="header__nav-item">
                      <Link className="header__nav-link" to={AppRoute.LOGIN}>
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  ) : null}
                </ul>
              </nav>
            ) : null}
          </div>
        </div>
      </header>
      <Outlet />
      {shouldRenderFooter ? (
        <footer className="footer container">
          <Link className="footer__logo-link" to="main.html">
            <img
              className="footer__logo"
              src="img/logo.svg"
              alt="6 cities logo"
              width="64"
              height="33"
            />
          </Link>
        </footer>
      ) : null}
    </div>
  );
}

export default Layout;
