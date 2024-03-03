import { Path } from '../constants';

export type RouteType = {
  path: Path;
  element: JSX.Element;
  isAuth?: boolean;
};
