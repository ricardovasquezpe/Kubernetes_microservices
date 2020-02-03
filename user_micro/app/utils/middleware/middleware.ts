import { ResponsetHandler } from '../responsetHandler';

export class Middleware {

    public responseHandler: ResponsetHandler = new ResponsetHandler();

    doAuth = (req, res, next) => {
        if(1 == 1){
            next();
        }else{
            this.responseHandler.sendError(res, "");
        }
    }

}