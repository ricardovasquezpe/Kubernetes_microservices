import { UserService } from "./user.service";
import { ResponsetHandler } from '../utils/responsetHandler';
import { inject } from "inversify";
import TYPES from "../constants/types";
import { BaseHttpController, controller, httpDelete, httpGet, httpPost, httpPut } from "inversify-express-utils";
import { JsonResult } from "inversify-express-utils/dts/results";

@controller("/user")
export class UserController extends BaseHttpController {
    public responseHandler: ResponsetHandler = new ResponsetHandler();

    constructor(@inject(TYPES.UserService) private userService: UserService) {
        super();
    }

    @httpGet("/")
    public async login(req: Request, res: Response): Promise<JsonResult> {
        const content = await this.userService.login();
        const statusCode = 200;
        return this.json(content, statusCode);
    }

    @httpGet("/create")
    public async create(req: Request, res: Response): Promise<JsonResult> {
        const content = await this.userService.create();
        const statusCode = 200;
        return this.json(content, statusCode);
    }
}