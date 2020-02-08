//import { mongoose } from 'mongoose';
import * as mongoose from "mongoose";

const connStr = 'mongodb+srv://admin:123@cluster0-tmji7.mongodb.net/test?retryWrites=true&w=majority';

export class MongoDBConnection {
    private static isConnected: boolean = false;
    private static db;

    public static getConnection(result: (connection) => void) {
        if (this.isConnected) {
          return result(this.db);
        } else {
          this.connect((error, db) => {
            return result(this.db);
          });
        }
    }

    private static connect(result: (error, db) => void) {
        /*mongoose.connect(connStr, { useNewUrlParser: true });
        this.db = mongoose.connection;
        return result("", this.db);*/

        mongoose.connect(connStr, (err) => {
          return result(err, this.db);
        })
    }

}