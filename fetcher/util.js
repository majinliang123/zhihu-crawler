/**
 * util of the project
 * create by Madison on 2017/6/7
 */
'use strict';


function createHeader(url) {
    let option = {
        url: "https://www.zhihu.com/api/v4/members/" + url,
        headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-charset': 'utf8',
            'Accept-Language': 'zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.4',
            'Connection': 'keep-alive',
            'Cookie': 'q_c1=9f1b6363d63444ec97abcc006b32bb13|1494218050000|1494218050000; d_c0="AECCwS6puQuPToTM6lZR5asu34dGB5JHgC8=|1494218051"; _zap=525e7598-fddd-4018-ab6d-15371110f701; r_cap_id="NDA4MjRkM2VjNTE4NDIxNmE1NDgxZmNlNzkyYzJiNWU=|1496665967|fc40b1f38e3a1374fd2c3aa0703a3da0517d360d"; cap_id="ZjVmMTAwZmM2N2M0NGFlZTljZTdiNjY2MTEwNDRhZTE=|1496665967|61d4384aef6c7511f89455fa2d613b0a0c3f39ec"; __utma=51854390.1349439557.1496822298.1496822298.1496822298.1; __utmb=51854390.0.10.1496822298; __utmz=51854390.1496822298.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmv=51854390.100-1|2=registration_date=20160603=1^3=entry_date=20160603=1; capsion_ticket="2|1:0|10:1496822309|14:capsion_ticket|44:MWY3YTIxZTNkNWIwNDBiN2JkMzk4MDQwNmU4ZDZkZmQ=|9fd26739ca28522bdce45dc37c015ab59793a30024be43283dd8eff1ce0745d6"; aliyungf_tc=AQAAAKxcrRn5Og0AM5zIcQnuaeWvmoX0; z_c0=Mi4wQUpEQ0lOSjM0QXNBUUlMQkxxbTVDeVlBQUFCZ0FsVk5WRDlmV1FBOFJ5OVQ0QmM3Ym5kWEhiWUIyREpSMHpSYUp3|1496822710|f76aadd76692755ab120519bc7ed834ea6799a42',
            'Referer': 'https://www.zhihu.com/',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
            'X-Requested-With': 'XMLHttpRequest',
            'X-Xsrftoken': '6593c414de85eb185094752125fd40de'
        }
    };
    return option;
}

function createUrlFollowees(people, offset, limit = 20) {
    const basic = people + '/followees?include=data[*].answer_count,articles_count,gender,follower_count,is_followed,is_following,badge[?(type=best_answerer)].topics&';
    let url = basic + 'offset=' + offset + '&limit=' + limit;
    return createHeader(url);
}


module.exports = {
    'createUrlFollowees': createUrlFollowees
};