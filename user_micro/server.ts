import server from './app/app';
import bodyParser = require('body-parser');
import "./app/user/user.controller";
import "reflect-metadata"

server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true,
    }));
    app.use(bodyParser.json());
});

const serverInstance = server.build();
serverInstance.listen(process.env.PORT);
console.log(`Server started on port ${process.env.PORT} :)`);