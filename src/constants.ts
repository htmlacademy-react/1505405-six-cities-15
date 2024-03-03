export enum AppRoute {
  MAIN = '/',
  LOGIN = '/login',
  FAVS = '/favorites',
  OFFER = '/offer/:id',
  NOT_FOUND = '*',
}

export enum AuthorizationStatus {
  AUTH = 'auth',
  NOT_AUTH = 'notAuth',
}
