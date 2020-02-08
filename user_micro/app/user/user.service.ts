import { MongoDBClient } from "app/utils/mongodb/client";
import { injectable, inject } from "inversify";
import "reflect-metadata"
import TYPES from "../constants/types";

@injectable()
export class UserService {
    private mongoDBClient: MongoDBClient;

    constructor(@inject(TYPES.MongoDBClient) mongoDBClient: MongoDBClient) {
        this.mongoDBClient = mongoDBClient;
      }
      
    login = async () => {
        return "Login";
    }

    create = () => {
        return "Create";
    }

}