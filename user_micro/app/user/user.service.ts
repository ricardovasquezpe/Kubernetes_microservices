import { injectable } from "inversify";
import "reflect-metadata"

@injectable()
export class UserService {

    login = async () => {
        return "Login";
    }

    create = () => {
        return "Create";
    }

}