import { UserService } from "./user.service";
import { ResponsetHandler } from '../utils/responsetHandler';

export class UserController { 
    public userService: UserService = new UserService();
    public responseHandler: ResponsetHandler = new ResponsetHandler();

    login = async (req: Request, res: Response) => {
        try {
            let response = await this.userService.login();
            this.responseHandler.sendSuccess(res, "Success", response);
        } catch (error) {
            
        }
    }

    create = (req: Request, res: Response) => {
        let response = this.userService.create();
        this.responseHandler.sendSuccess(res, "Success", response);
    }
}