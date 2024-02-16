import { defaultClasses, getModelForClass, prop, modelOptions } from '@typegoose/typegoose';
import { TUser, EUserKind } from '../../../types/index.js';
import { createSHA256 } from '../../../helpers/index.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface UserEntity extends defaultClasses.Base {}

modelOptions({
  schemaOptions: {
    collection: 'users',
    timestamps: true,
  }
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class UserEntity extends defaultClasses.TimeStamps implements TUser {
  @prop({ required: true })
  public name: string;

  @prop({
    required: true,
    math: [/^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Email is incorrect'],
    unique: true,
  })
  public email: string;

  @prop({ required: false, default: '' })
  public avatar?: string;

  @prop({ required: true })
  private password: string;

  constructor(userData: TUser) {
    super();
    this.name = userData.name;
    this.email = userData.email;
    this.avatar = userData.avatar;
    this.userType = userData.userType;
  }

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public getPassword() {
    return this.password;
  }

  @prop({
    required: true,
    type: () => String,
    enum: EUserKind
  })
  public userType: EUserKind;
}

export const UserModel = getModelForClass(UserEntity);
