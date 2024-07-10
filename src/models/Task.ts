import { BSON, ObjectSchema,Realm } from "realm";

export class Task extends Realm.Object<Task> {
    _id!: BSON.ObjectId;
    name!: string;
    
    
  }
  