import { AuthorizationStatus } from './constants';

export const getAuthorizationStatus: () => AuthorizationStatus = () =>
  AuthorizationStatus.AUTH;
