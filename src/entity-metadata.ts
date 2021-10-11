import { EntityMetadataMap } from '@ngrx/data';


const entityMetadata: EntityMetadataMap = {
  Message: {},
  Channel: {},
  User: {},
  Service: {}
};

const pluralNames = { Message: 'users', Channel: 'Channels', User: 'Users', Service: 'Services' };

export const entityConfig = {
  entityMetadata,
  pluralNames
};
