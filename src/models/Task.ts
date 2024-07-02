import { BSON, ObjectSchema,Realm } from "realm";

export class Profile extends Realm.Object<Profile> {
    _id!: BSON.ObjectId;
    name!: string;
    static schema: ObjectSchema = {
      name: 'Profile',
      properties: {
        _id: 'objectId',
        name: {type: 'string', indexed: 'full-text'},
      },
      primaryKey: '_id',
    };
  }
  