import { Container } from "inversify";
import { UserService } from "../user/user.service";
import TYPES from "../constants/types";

export class ContainerConfigLoader {
  public static Load(): Container {
    const container = new Container();
    container.bind<UserService>(TYPES.UserService).to(UserService);
    return container;
  }
}