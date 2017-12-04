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
async function workForFollowers(starter) {
    let offset = 0;
    while (true) {
        let data = await fetchInfo(starter, offset, Creator.createUrlFollowers);
        if (Analyzer.analyzeFollowers(data, starter)) {
            break;
        };
        offset += 20;
    }
}

async function workForFollowingQuestions(starter) {
    let offset = 0;
    while (true) {
        let data = await fetchInfo(starter, offset, Creator.createUrlFollowingQuestions);
        if (Analyzer.analyzeFollowingQuestions(data, starter)) {
            break;
        };
        offset += 20;
    }
}

async function workForFollowingColumns(starter) {
    let offset = 0;
    while (true) {
        let data = await fetchInfo(starter, offset, Creator.createUrlFollowingColumns);
        if (Analyzer.analyzeFollowingColumns(data, starter)) {
            break;
        };
        offset += 20;
    }
}

async function workForFollowingTopics(starter) {
    let offset = 0;
    while (true) {
        let data = await fetchInfo(starter, offset, Creator.createUrlFollowingTopics);
        if (Analyzer.analyzeFollowingTopics(data, starter)) {
            break;
        };
        offset += 20;
    }
}

async function workForAnswers(starter) {
    let offset = 0;
    while (true) {
        let data = await fetchInfo(starter, offset, Creator.createUrlAnswers);
        if (Analyzer.analyzeAnswers(data, starter)) {
            break;
        };
        offset += 20;
    }
}

function worker(database, user) {
    return new Promise(function (resolve, reject) {
        // let workerList = [workForFollowees(database, user), workForFollowers(database, user), workForFollowingQuestions(database, user), workForFollowingColumns(database, user), workForFollowingTopics(database, user), workForAnswers(database, user)];
        let workerList = [workForFollowees(database, user)];
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