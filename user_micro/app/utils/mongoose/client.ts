import { MongoDBConnection } from "./connection";
import { injectable } from "inversify";

@injectable()
export class MongoDBClient {
    public db;

    constructor() {
      MongoDBConnection.getConnection((connection) => {
        this.db = connection;
      });
    }
}