/**
 * main file for crawler
 * create by Madison on 2017/6/7
 */
'use strict';

const fetchInfo = require('./info.js');
const analyzer = require('./analyzer.js');

const starter = 'song-yuan-fan';

async function worker(starter) {
    let offset = 0;
    while (true) {
        let data = await fetchInfo(starter, offset);
        console.log(data);
        if (analyzer.analyzeFollowees(data, starter)) {
            break;
        };
        offset += 20;
    }
}

worker(starter);