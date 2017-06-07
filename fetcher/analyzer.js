/**
 * use to analyse json data
 * create by Madison on 2017/6/7
 */
'use strict';

const User = require('../model/User.js');

function analyzer(info, self) {
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
        }
        arr.push(query);
        User.findOne(query, function(docs) {
            if (!docs) {
                User.insert(query);
            }
        });
    });
    User.update({ token: self }, { following: arr });
    // store data into database
    return is_end;
}

module.exports = analyzer;