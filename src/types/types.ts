type PlaceType = 'Apartment' | 'Room';

export type OfferType = {
  id: number;
  img: string;
  price: number;
  type: PlaceType;
  description: string;
  rating?: number;
  isPremium?: boolean;
};

export type Coordinates = {
  lat: number;
  lng: number;
};

export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type Point = {
  title: string;
  lat: number;
  lng: number;
};

export type Review = {
  avatar: string;
  userName: string;
  rating: number;
  text: string;
  date: string;
};
