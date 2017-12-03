'use strict';

const nconf = require('nconf');
const logger = require('log4js').getLogger('cheese');

const UserCollection = nconf.get('db:collection:user');

let findOnePromise = function (database, query) {
    logger.info('Handling by findOnePromise with criteria: ' + JSON.stringify(query));
    return new Promise(function (resolve, reject) {
        database.collection(UserCollection).findOne(query, function (err, user) {
            if (err) {
                reject(err);
            } else {
                logger.info('findOnePromise successfully with result: ' + JSON.stringify(user) + ' in collection: ' + UserCollection);
                resolve(user);
            }
        });
    });
};

let updatePromise = function (database, query, doc) {
    logger.info('Handling by updatePromise with criteria: ' + JSON.stringify(query) + ' and doc: ' + JSON.stringify(doc));
    return new Promise(function (resolve, reject) {
        database.collection(UserCollection).update(query, doc, function (err, result) {
            if (err) {
                reject(err);
            } else {
                logger.info('updatePromise successfully with result: ' + JSON.stringify(result));
                resolve(result);
            }
        });
    });
};

module.exports = {
    findOne: findOnePromise,
    update: updatePromise
};