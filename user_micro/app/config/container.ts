import { Container } from "inversify";
import { UserService } from "../user/user.service";
import { MongoDBClient } from '../utils/mongodb/client';
import TYPES from "../constants/types";

export class ContainerConfigLoader {
  public static Load(): Container {
    const container = new Container();
    container.bind<UserService>(TYPES.UserService).to(UserService);
    container.bind<MongoDBClient>(TYPES.MongoDBClient).to(MongoDBClient);
    return container;
  }
}