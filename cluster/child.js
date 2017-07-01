/**
 * create by Madison on 2017.6.30
 * generate new child process
 */
'use strict';


const User = require('../model/User.js');
const worker = require('../fetcher/worker.js');


function run(){
    User.findOne({'done': null}, function(doc){
        console.log(doc.token);
        User.update({'token': doc.token}, {'done': true});
        worker(doc.token, function(){
            run();
        });
        
    });
}

run();
module.exports = run;