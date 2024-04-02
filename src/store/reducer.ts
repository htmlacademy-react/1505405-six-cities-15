import { createReducer } from '@reduxjs/toolkit';
import { updateCity, insertOffer } from './action';
import { OFFERS } from '../mocks/offers';
import { CITIES } from '../mocks/cities';

const initialState = {
  offers: OFFERS,
  city: CITIES[0],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(insertOffer, (state, action) => {
      state.offers.push(action.payload.offer);
    })
    .addCase(updateCity, (state, action) => {
      state.city = action.payload.city;
    });
});
