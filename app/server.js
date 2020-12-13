'use strict';

const helmet = require('helmet'),
    express = require('express'),
    http = require('http'),
    healthcheck = require('./routes/healthcheck'),
    notFound = require('./routes/notFound'),
    config = require('config'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    processAJob = require('./jobs/aJob');

const app = express();
const port = process.env.PORT || 3003;

app.set('port', port);
app.use(bodyParser.json({ limit: '10kb' }));
app.use(bodyParser.urlencoded({ limit: '10kb', extended: false }));
app.use(helmet());
app.use(cors());

const path = '/';

app.get(path + 'healthcheck', healthcheck.index);
app.use(notFound.index);

//START
const server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.info(`Express server listening on port ${port}`);
});

if (config.get('job.aJob.scheduleOn')){
  processAJob.startCronJob();
}

const closeServer = function () {
  if (err) {console.error('uncaughtException: ' + err);}
  process.exit(0);
};

process.on('exit', closeServer);
process.on('SIGINT', closeServer);
process.on('SIGTERM', closeServer);
process.on('uncaughtException', closeServer);

module.exports = app;