'use strict';

const request = require("request");

function fetchInfo(url_token, offset, createUrl) {
    let url = createUrl(url_token, offset);
    return new Promise(function (resolve, reject) {
        request(url, function (err, response) {
            if (err) {
                reject(err);
            } else {
                resolve(response.body);
            }
        });
    });
}

module.exports = fetchInfo;