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
    following_topics: Array,
    following_columns: Array,
    following_questions: Array,
    done: Boolean
});

const User = mongoDB.model(userCollectoin, userSchema);

function insert(obj) {
    new User(obj).save(function(err, user) {
        if (err) {
            return logger.error('error in insert ' + err);
        }
    });
}

function insertMany(arr) {
    User.insertMany(arr, function(err) {
        if (err) {
            return logger.error('error in insertMany ' + err);
        }
    });
}

function findOne(query, callback) {
    User.count({ 'done': null }, function(err, total) {
        let rand = Math.round(Math.random() * total);
        User.findOne(query, null, { skip: rand, limit: 1 }, function(err, docs) {
            if (err) {
                return logger.error('error in findOne ' + err);
            }
            callback(docs);
        });
    });
}

function update(query, obj) {
    User.update(query, obj, function(err) {
        if (err) {
            return logger.error('error in update ' + err);
        }
    });
}

function pushToArray(query, obj) {
    User.update(query, { $pushAll: obj }, { "upsert": true }, function(err) {
        if (err) {
            return logger.error('error in update ' + err);
        }
    });
}

module.exports = {
    'insert': insert,
    'insertMany': insertMany,
    'findOne': findOne,
    'update': update,
    'pushToArray': pushToArray
};

// insert({ name: '18829236722', token: '18829236722' });
// findOne({ 'done': null }, function(docs) {
//     console.log(docs);
// });