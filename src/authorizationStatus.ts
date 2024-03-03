import { AuthorizationStatus } from './constants';

export const getAuthorizationStatus: () => AuthorizationStatus = () =>
  AuthorizationStatus.NOT_AUTH;
