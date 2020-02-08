/*import * as express from "express";
import * as bodyParser from "body-parser";
import { UserRoutes } from "./user/user.routes";
import * as mongoose from "mongoose";*/
import { ProcessConfigLoader } from "./config/env";
import { ContainerConfigLoader } from "./config/container";
import { InversifyExpressServer } from "inversify-express-utils";
import "./config/imports";

class App {

    /*public app: express.Application = express();
    public routePrv: UserRoutes = new UserRoutes();
    public mongoUrl: string = 'mongodb://localhost/test';*/
    public server = new InversifyExpressServer(null);

    constructor() {
        //this.config();
        //this.mongoSetup();
        //this.routePrv.routes(this.app);
        this.configv2();
    }

    /*private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static('public'));
        this.app.set('superSecret', '1029384756');
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    }*/

    private configv2(): void {
        ProcessConfigLoader.Load("./config/.env");
        const container = ContainerConfigLoader.Load();
        this.server = new InversifyExpressServer(container, null, { rootPath: "/api/v1" });
    }

}

export default new App().server;