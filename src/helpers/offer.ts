import { IOffer, ECity, EHousingType, EConvinience } from '../types/index.js';
import { toBoolean } from './common.js';

export function createOffer(offerData: string): IOffer {
  const [
    title,
    description,
    createdDate,
    city,
    previewImg,
    photos,
    isPremium,
    isFavorites,
    rating,
    housingType,
    rooms,
    adults,
    price,
    conveniences,
    authorID,
    commentsCount
  ] = offerData.replace('\n', '').split('\t');

  return {
    title,
    description,
    date: new Date(createdDate),
    city: city as ECity,
    previewImg,
    photos: photos.split(';'),
    isPremium: toBoolean(isPremium),
    isFavorites: toBoolean(isFavorites),
    rating: Number.parseInt(rating, 10),
    housingType: housingType as EHousingType,
    rooms: Number.parseInt(rooms, 10),
    adults: Number.parseInt(adults,10),
    price: Number.parseInt(price, 10),
    conveniences: conveniences.split(';')
      .map((conv) => EConvinience[conv as 'BREAKFAST' | 'AIRCONDITIONING' | 'LAPTOPWORKSPACE' | 'BABYSEAT' | 'WASHER' | 'TOWELS' | 'FRIDGE']),
    authorID,
    commentsCount: Number.parseInt(commentsCount, 10),
  };
}
