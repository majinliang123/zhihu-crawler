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
log4js.addAppender(log4js.appenders.file(logPath), 'cheese');
const logger = log4js.getLogger('cheese');
logger.setLevel(level);

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
            return new Promise(function (resolve, rejcet) {
                UserService.update(data.database, { 'token': data.doc.token }, { 'done': true })
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
        .then(function (user) {
            return new Promise(function (resolve, rejcet) {
                worker(user)
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
            run();
        })
        .catch(function (err) {
            logger.error(err);
        });
}

run();
module.exports = run;