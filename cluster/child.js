'use strict';

const nconf = require('nconf');
const log4js = require('log4js');

nconf.file({ file: __dirname + '/../config/gobalConfig.json' });
const UserService = require('../db/userService');
const worker = require('../fetcher/worker.js');
const connectDB = require('../db/mongodb.js');

// init log
const logPath = __dirname + nconf.get('log:logPath');
const level = nconf.get('log:level');
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file(logPath), 'zhihu-crawler');
const logger = log4js.getLogger('zhihu-crawler');
logger.setLevel(level);
// set interval
const interval = nconf.get('cluster:interval');

function run() {
    connectDB()
        .then(function (database) {
            return new Promise(function (resolve, rejcet) {
                UserService.findOne(database, { 'done': { $exists: false } })
                    .then(function (doc) {
                        resolve({
                            database: database,
                            doc: doc
                        });
                    })
                    .catch(function (err) {
                        rejcet(err);
                    })
            })
        })
        .then(function (data) {
            logger.info('crawler for ' + data.doc.token + ' is started.');
            let updateDoc = data.doc;
            updateDoc.done = true;
            return new Promise(function (resolve, rejcet) {
                UserService.update(data.database, { 'token': data.doc.token }, updateDoc)
                    .then(function () {
                        resolve({
                            database: data.database,
                            user: data.doc.token
                        });
                    })
                    .catch(function (err) {
                        rejcet(err);
                    })
            });
        })
        .then(function (data) {
            logger.info('crawler for ' + data.user + ' is handled with worker.');
            return new Promise(function (resolve, rejcet) {
                worker(data.database, data.user)
                    .then(function (user) {
                        resolve(user);
                    })
                    .catch(function (err) {
                        rejcet(err);
                    })
            })
        })
        .then(function (user) {
            logger.info('crawler for ' + user + ' is completed.');
            setTimeout(run, interval);
        })
        .catch(function (err) {
            logger.error(err);
        });
}

run();
module.exports = run;