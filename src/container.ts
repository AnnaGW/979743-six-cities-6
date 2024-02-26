import { Container } from 'inversify';
import { createRestApplicationContainer } from './rest/rest.container.js';
import { createUserContainer } from './libs/models/user/user.container.js';
import { createOfferContainer } from './libs/models/offer/offer.container.js';
import { createCommentContainer } from './libs/models/comment/index.js';

export const appContainer = Container.merge(
  createRestApplicationContainer(),
  createUserContainer(),
  createOfferContainer(),
  createCommentContainer(),
);
