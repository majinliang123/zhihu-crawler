'use strict';

const fetchInfo = require('./info.js');
const Analyzer = require('./analyzer.js');
const UrlCreater = require('../util/urlCreater.js');

// const queue = ['following_questions', 'following_columns', 'following_topics', 'asks', 'answers', 'following', 'followers'];

function workForFollowees(database, user, offset) {
    if (!offset) {
        offset = 0;
    }
    return fetchInfo(user, offset, UrlCreater.createUrlFollowees)
        .then(function (data) {
            return Analyzer.analyzeFollowees(database, data, user);
        })
        .then(function (is_end) {
            if (!is_end) {
                offset = offset + 20;
                return workForFollowees(database, user, offset);
            } else {
                return Promise.resolve();
            }
        })
        .catch(function (err) {
            return Promise.reject(err);
        })

}

function workForFollowers(database, user, offset) {
    if (!offset) {
        offset = 0;
    }
    return fetchInfo(user, offset, UrlCreater.createUrlFollowers)
        .then(function (data) {
            return Analyzer.analyzeFollowers(database, data, user);
        })
        .then(function (is_end) {
            if (!is_end) {
                offset = offset + 20;
                return workForFollowers(database, user, offset);
            } else {
                return Promise.resolve();
            }
        })
        .catch(function (err) {
            return Promise.reject(err);
        })
}

function workForFollowingQuestions(database, user, offset) {
    if (!offset) {
        offset = 0;
    }
    return fetchInfo(user, offset, UrlCreater.createUrlFollowingQuestions)
        .then(function (data) {
            return Analyzer.analyzeFollowingQuestions(database, data, user);
        })
        .then(function (is_end) {
            if (!is_end) {
                offset = offset + 20;
                return workForFollowingQuestions(database, user, offset);
            } else {
                return Promise.resolve();
            }
        })
        .catch(function (err) {
            return Promise.reject(err);
        })
}

function workForFollowingColumns(database, user, offset) {
    if (!offset) {
        offset = 0;
    }
    return fetchInfo(user, offset, UrlCreater.createUrlFollowingColumns)
        .then(function (data) {
            return Analyzer.analyzeFollowingColumns(database, data, user);
        })
        .then(function (is_end) {
            if (!is_end) {
                offset = offset + 20;
                return workForFollowingColumns(database, user, offset);
            } else {
                return Promise.resolve();
            }
        })
        .catch(function (err) {
            return Promise.reject(err);
        })
}

function workForFollowingTopics(database, user, offset) {
    if (!offset) {
        offset = 0;
    }
    return fetchInfo(user, offset, UrlCreater.createUrlFollowingTopics)
        .then(function (data) {
            return Analyzer.analyzeFollowingTopics(database, data, user);
        })
        .then(function (is_end) {
            if (!is_end) {
                offset = offset + 20;
                return workForFollowingTopics(database, user, offset);
            } else {
                return Promise.resolve();
            }
        })
        .catch(function (err) {
            return Promise.reject(err);
        })
}

function workForAnswers(database, user, offset) {
    if (!offset) {
        offset = 0;
    }
    return fetchInfo(user, offset, UrlCreater.createUrlAnswers)
        .then(function (data) {
            return Analyzer.analyzeAnswers(database, data, user);
        })
        .then(function (is_end) {
            if (!is_end) {
                offset = offset + 20;
                return workForAnswers(database, user, offset);
            } else {
                return Promise.resolve();
            }
        })
        .catch(function (err) {
            return Promise.reject(err);
        })
}

function worker(database, user) {
    return new Promise(function (resolve, reject) {
        let workerList = [workForFollowees(database, user), workForFollowers(database, user), workForFollowingQuestions(database, user), workForFollowingTopics(database, user), workForAnswers(database, user)];
        // let workerList = [workForFollowees(database, user)];
        Promise.all(workerList)
            .then(function () {
                resolve(user);
            })
            .catch(function (err) {
                reject('crawler for ' + user + ' is failed. Failed reason is: ' + err);
            });
    });
}


module.exports = worker;