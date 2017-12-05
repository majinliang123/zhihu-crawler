'use strict';

function pushToArray(original, goingToPush) {
    let destination = [];
    if (original) {
        destination = original;
    }
    destination = destination.concat(goingToPush);
    return destination;
}

module.exports = pushToArray;