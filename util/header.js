'use strict';

const nconf = require('nconf');

function createHeader(url) {
    let option = {
        url: nconf.get('headerUrl') + url,
        headers: {
            'accept': nconf.get('header:accept'),
            "Accept-charset": nconf.get('header:Accept-charset'),
            'Accept-Language': nconf.get('header:Accept-Language'),
            'authorization': nconf.get('header:authorization'),
            'Connection': nconf.get('header:Connection'),
            'Cookie': nconf.get('header:Cookie'),
            'Host': nconf.get('header:Host'),
            'Referer': nconf.get('header:Referer'),
            'User-Agent': nconf.get('header:User-Agent'),
            'X-API-VERSION': nconf.get('header:X-API-VERSION'),
            'X-UDID': nconf.get('header:X-UDID')
        }
    };
    return option;
}

module.exports = createHeader;