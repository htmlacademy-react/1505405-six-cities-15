import { TStore } from '../types/store';
import { TCity, TOffer } from '../types/types';

export const getCurrentCity: (store: TStore) => TCity = (store) => store.city;
export const getOffers: (store: TStore) => TOffer[] = (store) => store.offers;
export const getCurrentOffers: (store: TStore) => TOffer[] = (store) =>
  store.offers.filter((offer) => offer.city.name === store.city.name);
