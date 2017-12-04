'use strict';

const UserService = require('../db/userService');

function analyzeFollowees(database, info, user) {
    info = JSON.parse(info);
    let is_end = info.paging.is_end;

    let data = info.data;
    let insertUserPromises = [];
    let followingArray = [];

    data.forEach(function (element) {
        let token = element.url_token;
        let name = element.name;
        let insertDoc = {
            'token': token,
            'name': name
        };
        followingArray.push(insertDoc);
        let insertPromise = new Promise(function (resolve, reject) {
            UserService.findOne(database, insertDoc)
                .then(function (user) {
                    if (user) {
                        resolve();
                    } else {
                        UserService.insert(database, insertDoc)
                            .then(function (result) {
                                resolve(result);
                            })
                            .catch(function (err) {
                                reject(err);
                            });
                    }
                })
                .catch(function (err) {
                    reject(err);
                });
        });
        insertUserPromises.push(insertPromise);
    });
    let updatePromise = new Promise(function (resolve, reject) {
        UserService.findOne(database, { 'token': user })
            .then(function (userDoc) {
                userDoc.following = followingArray;
                UserService.update(database, { 'token': user }, userDoc)
                    .then(function () {
                        resolve(is_end);
                    })
                    .catch(function (err) {
                        reject(err);
                    })
            })
            .catch(function (err) {
                reject(err);
            })
    });
    return Promise.all(insertUserPromises)
        .then(updatePromise);
}

function analyzeFollowers(database, info, user) {
    info = JSON.parse(info);
    let is_end = info.paging.is_end;

    let data = info.data;
    let insertUserPromises = [];
    let followersArray = [];

    data.forEach(function (element) {
        let token = element.url_token;
        let name = element.name;
        let insertDoc = {
            'token': token,
            'name': name
        };
        followersArray.push(insertDoc);
        let insertPromise = new Promise(function (resolve, reject) {
            UserService.findOne(database, insertDoc)
                .then(function (user) {
                    if (user) {
                        resolve();
                    } else {
                        UserService.insert(database, insertDoc)
                            .then(function (result) {
                                resolve(result);
                            })
                            .catch(function (err) {
                                reject(err);
                            });
                    }
                })
                .catch(function (err) {
                    reject(err);
                });
        });
        insertUserPromises.push(insertPromise);
    });
    let updatePromise = new Promise(function (resolve, reject) {
        UserService.findOne(database, { 'token': user })
            .then(function (userDoc) {
                userDoc.followers = followersArray;
                UserService.update(database, { 'token': user }, userDoc)
                    .then(function () {
                        resolve(is_end);
                    })
                    .catch(function (err) {
                        reject(err);
                    })
            })
            .catch(function (err) {
                reject(err);
            })
    });
    return Promise.all(insertUserPromises)
        .then(updatePromise);
}


function analyzeFollowingQuestions(database, info, user) {
    info = JSON.parse(info);
    let is_end = info.paging.is_end;

    let data = info.data;
    let followingQuestionsArray = [];

    data.forEach(function (element) {
        let id = element.id;
        let title = element.title;
        let question = {
            'id': id,
            'title': title
        };
        followingQuestionsArray.push(question);
    });
    let updatePromise = new Promise(function (resolve, reject) {
        UserService.findOne(database, { 'token': user })
            .then(function (userDoc) {
                userDoc.following_questions = followingQuestionsArray;
                UserService.update(database, { 'token': user }, userDoc)
                    .then(function () {
                        resolve(is_end);
                    })
                    .catch(function (err) {
                        reject(err);
                    })
            })
            .catch(function (err) {
                reject(err);
            })
    });
    return updatePromise;
}

function analyzeFollowingColumns(database, info, user) {
    info = JSON.parse(info);
    let is_end = info.paging.is_end;

    let data = info.data;
    let followingColumnsArray = [];

    data.forEach(function (element) {
        let id = element.id;
        let title = element.title;
        let column = {
            'id': id,
            'title': title
        };
        followingColumnsArray.push(column);
    });
    let updatePromise = new Promise(function (resolve, reject) {
        UserService.findOne(database, { 'token': user })
            .then(function (userDoc) {
                userDoc.following_columns = followingColumnsArray;
                UserService.update(database, { 'token': user }, userDoc)
                    .then(function () {
                        resolve(is_end);
                    })
                    .catch(function (err) {
                        reject(err);
                    })
            })
            .catch(function (err) {
                reject(err);
            })
    });
    return updatePromise;
}

function analyzeFollowingTopics(database, info, user) {
    info = JSON.parse(info);
    let is_end = info.paging.is_end;

    let data = info.data;
    let followingTopicsArray = [];

    data.forEach(function (element) {
        let id = element.id;
        let title = element.title;
        let topic = {
            'id': id,
            'title': title
        };
        followingTopicsArray.push(column);
    });
    let updatePromise = new Promise(function (resolve, reject) {
        UserService.findOne(database, { 'token': user })
            .then(function (userDoc) {
                userDoc.following_topics = followingTopicsArray;
                UserService.update(database, { 'token': user }, userDoc)
                    .then(function () {
                        resolve(is_end);
                    })
                    .catch(function (err) {
                        reject(err);
                    })
            })
            .catch(function (err) {
                reject(err);
            })
    });
    return updatePromise;
}

function analyzeAnswers(database, info, user) {
    info = JSON.parse(info);
    let is_end = info.paging.is_end;

    let data = info.data;
    let answersArray = [];

    data.forEach(function (element) {
        let id = element.id;
        let title = element.title;
        let answer = {
            'id': id,
            'title': title
        };
        answersArray.push(answer);
    });
    let updatePromise = new Promise(function (resolve, reject) {
        UserService.findOne(database, { 'token': user })
            .then(function (userDoc) {
                userDoc.answers = answersArray;
                UserService.update(database, { 'token': user }, userDoc)
                    .then(function () {
                        resolve(is_end);
                    })
                    .catch(function (err) {
                        reject(err);
                    })
            })
            .catch(function (err) {
                reject(err);
            })
    });
    return updatePromise;
}


module.exports = {
    'analyzeFollowees': analyzeFollowees,
    'analyzeFollowers': analyzeFollowers,
    'analyzeFollowingQuestions': analyzeFollowingQuestions,
    'analyzeFollowingColumns': analyzeFollowingColumns,
    'analyzeFollowingTopics': analyzeFollowingTopics,
    'analyzeAnswers': analyzeAnswers
};