import app from './app/app';
import * as http from 'http';
const config = require('./config/config');
console.log(config.app);

http.createServer(app).listen(config.app.port, () => {
    console.log('Express server listening on port ' + config.app.port);
})