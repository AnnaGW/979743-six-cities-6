import { Expose } from 'class-transformer';

export class UserRdo {
  @Expose()
  public name: string ;

  @Expose()
  public email: string ;

  @Expose()
  public avatar: string;

  @Expose()
  public userKind: string;

  @Expose()
  public favoritesOffers: string[];
}