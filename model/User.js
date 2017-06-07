/**
 * Use to control User colletcion.
 * Create by Madison on 2017/6/4.
 */
'use strict';

const config = require('../config/gobalConfig.js');
const mongoDB = require('./MongoDB');
const nconf = config.nconf;
const logger = config.logger;
const userCollectoin = nconf.get('collection:User');

const userSchema = mongoDB.Schema({
    token: String,
    name: String,
    followers: Array,
    following: Array,
    answers: Array,
    asks: Array,
    following_topics: Array,
    following_columns: Array,
    following_questions: Array,
    done: Boolean
});

const User = mongoDB.model(userCollectoin, userSchema);

function insert(obj) {
    new User(obj).save(function(err, user) {
        if (err) {
            return logger.error(err);
        }
    });
}

function insertMany(arr) {
    User.insertMany(arr, function(err) {
        return logger.error(err);
    });
}

function findOne(query, callback) {
    User.findOne(query, function(err, docs) {
        if (err) {
            return logger.error(err);
        }
        callback(docs);
    });
}

function update(query, obj) {
    User.update(query, obj, function(err) {
        return logger.error(err);
    });
}

module.exports = {
    'insert': insert,
    'insertMany': insertMany,
    'findOne': findOne,
    'update': update
}
insert({ name: '18829236722', token: '18829236722' })