/**
 * main file for crawler
 * create by Madison on 2017/6/7
 */
'use strict';

const fetchInfo = require('./info.js');
const Analyzer = require('./analyzer.js');
const Creator = require('./util.js');

// const queue = ['following_questions', 'following_columns', 'following_topics', 'asks', 'answers', 'following', 'followers'];

async function workeForFollowees(starter) {
    let offset = 0;
    while (true) {
        let data = await fetchInfo(starter, offset, Creator.createUrlFollowees);
        if (Analyzer.analyzeFollowees(data, starter)) {
            break;
        };
        offset += 20;
    }
}

async function workeForFollowers(starter) {
    let offset = 0;
    while (true) {
        let data = await fetchInfo(starter, offset, Creator.createUrlFollowers);
        if (Analyzer.analyzeFollowers(data, starter)) {
            break;
        };
        offset += 20;
    }
}

async function workeForFollowingQuestions(starter) {
    let offset = 0;
    while (true) {
        let data = await fetchInfo(starter, offset, Creator.createUrlFollowingQuestions);
        if (Analyzer.analyzeFollowingQuestions(data, starter)) {
            break;
        };
        offset += 20;
    }
}

async function workeForFollowingColumns(starter) {
    let offset = 0;
    while (true) {
        let data = await fetchInfo(starter, offset, Creator.createUrlFollowingColumns);
        if (Analyzer.analyzeFollowingColumns(data, starter)) {
            break;
        };
        offset += 20;
    }
}

async function workeForFollowingTopics(starter) {
    let offset = 0;
    while (true) {
        let data = await fetchInfo(starter, offset, Creator.createUrlFollowingTopics);
        if (Analyzer.analyzeFollowingTopics(data, starter)) {
            break;
        };
        offset += 20;
    }
}

async function workeForAnswers(starter) {
    let offset = 0;
    while (true) {
        let data = await fetchInfo(starter, offset, Creator.createUrlAnswers);
        if (Analyzer.analyzeAnswers(data, starter)) {
            break;
        };
        offset += 20;
    }
}

function worker(starter, callback) {
    let workerList = [workeForFollowees(starter), workeForFollowers(starter),  workeForFollowingQuestions(starter), workeForFollowingColumns(starter),workeForFollowingTopics(starter),workeForAnswers(starter)];
    Promise.all(workerList).then(function(){
        callback();
        console.log('crawler for ' + starter + ' is completed.');
    }).catch(function(err){
        console.log(err);
    });
    
}

module.exports = worker;