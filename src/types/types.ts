type PlaceType = 'apartment' | 'room' | 'house' | 'hotel';

export type TOffer = {
  id: string;
  title: string;
  type: PlaceType;
  price: number;
  previewImage: string;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  rating: number;
  isPremium: boolean;
};

export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TCity = {
  name: string;
  location: TLocation;
};

export type TPoint = {
  title: string;
  lat: number;
  lng: number;
};

export type TReview = {
  user: TUser;
  rating: number;
  text: string;
  date: string;
  pro?: boolean;
};

export type TUser = {
  name: string;
  avatar: string;
  isPro?: boolean;
};
