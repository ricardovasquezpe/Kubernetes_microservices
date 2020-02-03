import { UserController } from "./user.controller";
import { Middleware } from '../utils/middleware/middleware';

export class UserRoutes { 
    public userController: UserController = new UserController();
    public middleware: Middleware = new Middleware();

    public routes(app): void {
        app.get('/login', this.middleware.doAuth, this.userController.login);
        app.get('/create', this.middleware.doAuth, this.userController.create);
    }

}