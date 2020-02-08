import server from './app/app';
import bodyParser = require('body-parser');
import "reflect-metadata"

server.setConfig((app) => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.get('/', function(req, res) {
        res.send('hello world');
      });
});

const serverInstance = server.build();
serverInstance.listen(process.env.PORT);
console.log(`Server started on port ${process.env.PORT}`);