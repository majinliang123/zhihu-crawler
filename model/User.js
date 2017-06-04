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
    username: String,
    age: Number
});
userSchema.methods.speak = function() {
    let greet = 'User name is ' + this.username + '. Age is ' + this.age;
    logger.info(greet);
};

const User = mongoDB.model(userCollectoin, userSchema);

new User({ username: 'fluffy', age: 10 }).save(function(err, user) {
    if (err) {
        return logger.error(err);
    }
    user.speak();
});