import { injectable } from "inversify";
import { Db } from 'mongodb';
import { MongoDBConnection } from "./connection";

@injectable()
export class MongoDBClient {
    public db: Db;

    constructor() {
      MongoDBConnection.getConnection((connection) => {
        this.db = connection;
      });
    }

}