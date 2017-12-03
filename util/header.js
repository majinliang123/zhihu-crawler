'use strict';

const nconf = require('nconf');

function createHeader(url) {
    let option = {
        url: nconf.get('headerUrl') + url,
        headers: {
            'Accept': nconf.get('header:Accept'),
            'Accept-charset': nconf.get('header:Accept-charset'),
            'Accept-Language': nconf.get('header:Accept-Language'),
            'Connection': nconf.get('header:Connection'),
            'Cookie': nconf.get('header:Cookie'),
            'Referer': nconf.get('header:Referer'),
            'User-Agent': nconf.get('header:User-Agent'),
            'X-Requested-With': nconf.get('header:X-Requested-With'),
            'X-Xsrftoken': nconf.get('X-Xsrftoken'),
        }
    };
    return option;
}

module.exports = createHeader;