import { AppRoute } from '../../constants';

export const getLayoutState: (pathname: AppRoute) => {
  rootClassName: string;
  linkClassName: string;
  shouldRenderUser: boolean;
  shouldRenderFooter: boolean;
} = (pathname) => {
  let rootClassName = '';
  let linkClassName = '';
  let shouldRenderUser = true;
  let shouldRenderFooter = false;

  if (pathname === AppRoute.MAIN) {
    rootClassName = ' page--gray page--main';
    linkClassName = ' header__logo-link--active';
  } else if (pathname === AppRoute.LOGIN) {
    rootClassName = ' page--gray page--login';
    shouldRenderUser = false;
  } else if (pathname === AppRoute.FAVS) {
    shouldRenderFooter = true;
  }

  return { rootClassName, linkClassName, shouldRenderUser, shouldRenderFooter };
};
