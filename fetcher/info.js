/**
 * fetch info form zhihu
 * create by Madison on 2017/6/6
 */
'use strict';


const request = require("request");


const config = require('../config/gobalConfig.js');



function fetchInfo(url_token, offset, func) {
    return new Promise(function(resolve, reject) {
        request(func(url_token, offset), function(err, response) {
            if (err) {
                reject(err);
            } else {
                resolve(response.body);
            }
        });
    });
}

module.exports = fetchInfo;