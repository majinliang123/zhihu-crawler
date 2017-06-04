/**
 * Use to connect to db.
 * Created by Madison on 2017/6/4.
 */
'use strict';

const mongoose = require('mongoose');
const db = mongoose.connection;
const config = require('../config/gobalConfig.js');

const nconf = config.nconf;
const logger = config.logger;

const MongoDBUrl = nconf.get('MongoDBUrl');
const MongoDBPort = nconf.get('MongoDBPort');
const MongoDBName = nconf.get('MongoDBName');
const MongoConntStr = 'mongodb://' + MongoDBUrl + ':' + MongoDBPort + '/' + MongoDBName;

db.on('error', logger.error.bind(console, 'connection error: '));
db.once('open', function() {
    logger.info('connect successfully, ' + MongoConntStr);
});

mongoose.connect(MongoConntStr);
module.exports = mongoose;