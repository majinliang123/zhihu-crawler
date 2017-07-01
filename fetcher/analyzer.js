/**
 * use to analyse json data
 * create by Madison on 2017/6/7
 */
'use strict';

const User = require('../model/User.js');

function analyzeFollowees(info, self) {
    info = JSON.parse(info);
    let is_end = info.paging.is_end;

    let data = info.data;
    let arr = [];

    data.forEach(function(element) {
        let token = element.url_token;
        let name = element.name;
        let query = {
            'token': token,
            'name': name
        };
        arr.push(query);
        User.findOne(query, function(docs) {
            if (!docs) {
                User.insert(query);
            }
        });
    });

    User.pushToArray({ token: self }, { following: arr });
    return is_end;
}

function analyzeFollowers(info, self) {
    info = JSON.parse(info);
    let is_end = info.paging.is_end;

    let data = info.data;
    let arr = [];

    data.forEach(function(element) {
        let token = element.url_token;
        let name = element.name;
        let query = {
            'token': token,
            'name': name
        };
        arr.push(query);
        User.findOne(query, function(docs) {
            if (!docs) {
                User.insert(query);
            }
        });
    });

    User.pushToArray({ token: self }, { followers: arr });
    return is_end;
}

function analyzeFollowingQuestions(info, self) {
    info = JSON.parse(info);
    let is_end = info.paging.is_end;

    let data = info.data;
    let arr = [];

    data.forEach(function(element) {
        let id = element.id;
        let title = element.title;
        let question = {
            'id': id,
            'title': title
        };
        arr.push(question);
    });

    User.pushToArray({ token: self }, { following_questions: arr });
    return is_end;
}

function analyzeFollowingColumns(info, self) {
    info = JSON.parse(info);
    let is_end = info.paging.is_end;

    let data = info.data;
    let arr = [];

    data.forEach(function(element) {
        let id = element.id;
        let title = element.title;
        let question = {
            'id': id,
            'title': title
        };
        arr.push(question);
    });

    User.pushToArray({ token: self }, { following_columns: arr });
    return is_end;
}

function analyzeFollowingTopics(info, self) {
    info = JSON.parse(info);
    let is_end = info.paging.is_end;

    let data = info.data;
    let arr = [];

    data.forEach(function(element) {
        let id = element.topic.id;
        let name = element.topic.name;
        let question = {
            'id': id,
            'name': name
        };
        arr.push(question);
    });

    User.pushToArray({ token: self }, { following_topics: arr });
    return is_end;
}

function analyzeAnswers(info, self) {
    info = JSON.parse(info);
    let is_end = info.paging.is_end;

    let data = info.data;
    let arr = [];

    data.forEach(function(element) {
        let title = element.question.title;
        let id = element.question.id;
        let query = {
            'title': title,
            'id': id
        };
        arr.push(query);
        User.findOne(query, function(docs) {
            if (!docs) {
                User.insert(query);
            }
        });
    });

    User.pushToArray({ token: self }, { answers: arr });
    return is_end;
}

module.exports = {
    'analyzeFollowees': analyzeFollowees,
    'analyzeFollowers': analyzeFollowers,
    'analyzeFollowingQuestions': analyzeFollowingQuestions,
    'analyzeFollowingColumns': analyzeFollowingColumns,
    'analyzeFollowingTopics': analyzeFollowingTopics,
    'analyzeAnswers': analyzeAnswers
};