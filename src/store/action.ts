import { ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit';
import { TCity, TOffer } from '../types/types';

export const updateCity: ActionCreatorWithPayload<{ city: TCity }> =
  createAction('@@city/updateCity');
export const insertOffer: ActionCreatorWithPayload<{ offer: TOffer }> =
  createAction('@@offer/insertOffer');
