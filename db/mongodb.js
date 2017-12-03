'use strict';

const MongoClient = require('mongodb').MongoClient
const nconf = require('nconf');
const logger = require('log4js').getLogger('cheese');

const MongoDBUrl = nconf.get('db:MongoDBUrl');
const MongoDBPort = nconf.get('db:MongoDBPort');
const MongoDBName = nconf.get('db:MongoDBName');
const MongoConntStr = 'mongodb://' + MongoDBUrl + ':' + MongoDBPort + '/' + MongoDBName;

function connectDB() {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(MongoConntStr, function (err, db) {
            if (err) {
                reject(err);
            } else {
                logger.info('Connect to mongodb success.');
                resolve(db);
            }
        });
    });
}

module.exports = connectDB;