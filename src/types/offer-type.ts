import { ECity } from './city-enam.js';
import { EHousingType } from './housing-type.js';
import { EConvinience } from './convinience-type.js';

export interface IOffer {
  title: string;
  description: string;
  date: Date;
  city: ECity;
  previewImg: string;
  photos: string[];
  isPremium: boolean;
  isFavorites: boolean;
  rating: number;
  housingType: EHousingType;
  rooms: number;
  adults: number;
  price: number;
  conveniences: EConvinience[];
  authorID: string;
  commentsCount: number;
}
