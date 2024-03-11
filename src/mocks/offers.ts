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

export const mockOffers: OfferType[] = [
  {
    id: 1,
    img: 'img/apartment-01.jpg',
    price: 120,
    rating: 4,
    description: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
  },
  {
    id: 2,
    img: 'img/room.jpg',
    price: 80,
    rating: 4,
    description: 'Wood and stone place',
    type: 'Room',
  },
  {
    id: 3,
    img: 'img/apartment-02.jpg',
    price: 132,
    rating: 4,
    description: 'Canal View Prinsengracht',
    type: 'Apartment',
  },
  {
    id: 4,
    img: 'img/apartment-03.jpg',
    price: 180,
    rating: 5,
    description: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    isPremium: true,
  },
  {
    id: 5,
    img: 'img/room.jpg',
    price: 80,
    rating: 4,
    description: 'Wood and stone place',
    type: 'Room',
  },
];
