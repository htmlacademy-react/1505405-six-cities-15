export enum AppRoute {
  MAIN = '/',
  LOGIN = '/login',
  FAVS = '/favorites',
  OFFER = '/offer',
  NOT_FOUND = '*',
}

export enum AuthorizationStatus {
  AUTH = 'auth',
  NOT_AUTH = 'notAuth',
}

export const URL_MARKER_DEFAULT = '/public/img/pin.svg';
export const URL_MARKER_CURRENT = '/public/img/pin-active.svg';
export const MAX_MAP_WIDTH = '1144px';
