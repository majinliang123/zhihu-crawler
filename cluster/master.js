'use strict';

const child_process = require('child_process');
const numCPUs = require('os').cpus().length;

for (let i = 0; i < numCPUs; i++) {
    console.log(i);
}