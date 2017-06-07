/**
 * fetch info form zhihu
 * create by Madison on 2017/6/6
 */
'use strict';


const request = require("request");


const config = require('../config/gobalConfig.js');
const Creator = require('./util.js');


function fetchInfo(url_token, offset) {
    return new Promise(function(resolve, reject) {
        request(Creator.createUrlFollowees(url_token, offset), function(err, response) {
            if (err) {
                reject(err);
            } else {
                resolve(response.body);
            }
        });
    });
}

module.exports = fetchInfo;