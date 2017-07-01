/**
 * Use to init config to be used in all the files
 * Create by Madison on 2017/6/4.
 */
'use strict';

const nconf = require('nconf');
const log4js = require('log4js');

nconf.file({
    file: '../config/gobalConfig.json'
});

const logPath = nconf.get('logPath');
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file(logPath), 'cheese');
const logger = log4js.getLogger('cheese');
logger.setLevel('trace');

module.exports = {
    'nconf': nconf,
    'logger': logger
};