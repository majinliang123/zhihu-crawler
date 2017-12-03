/**
 * main file for crawler
 * create by Madison on 2017/6/7
 */
'use strict';

const fetchInfo = require('./info.js');
const Analyzer = require('./analyzer.js');
const UrlCreater = require('../util/urlCreater.js');

// const queue = ['following_questions', 'following_columns', 'following_topics', 'asks', 'answers', 'following', 'followers'];

async function workForFollowees(starter) {
    let offset = 0;
    while (true) {
        let data = await fetchInfo(starter, offset, UrlCreater.createUrlFollowees);
        if (Analyzer.analyzeFollowees(data, starter)) {
            break;
        };
        offset += 20;
    }
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

function worker(starter) {
    return new Promise(function (resolve, reject) {
        let workerList = [workForFollowees(starter), workForFollowers(starter), workForFollowingQuestions(starter), workForFollowingColumns(starter), workForFollowingTopics(starter), workForAnswers(starter)];
        Promise.all(workerList)
            .then(function () {
                resolve(starter);
            })
            .catch(function () {
                reject('crawler for ' + starter + ' is failed.');
            });
    });
}


module.exports = worker;