'use strict';

const nconf = require('nconf');
const log4js = require('log4js');

const child_process = require('child_process');
const numCPUs = require('os').cpus().length;

// init config
nconf.file({ file: __dirname + '/../config/gobalConfig.json' });

// init log
const logPath = __dirname + nconf.get('log:logPath');
const level = nconf.get('log:level');
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file(logPath), 'cheese');
const logger = log4js.getLogger('cheese');
logger.setLevel(level);

const clusterNumber = nconf.get('cluster:number') || numCPUs;

logger.info('Master starts with ' + clusterNumber + ' clusters.');
for (let i = 0; i < clusterNumber; i++) {
    child_process.fork(__dirname + "/child.js");
}