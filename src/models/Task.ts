import { BSON, ObjectSchema,Realm } from "realm";

export class Task extends Realm.Object<Task> {
    _id: BSON.ObjectId = new BSON.ObjectId();
    description!: string;
    isComplete: boolean = false;
    createdAt: Date = new Date();
    owner_id!:string;


    static primaryKey = '_id';
    
    
  }
  