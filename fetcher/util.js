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
            'Cookie': 'd_c0="AECCwS6puQuPToTM6lZR5asu34dGB5JHgC8=|1494218051"; _zap=525e7598-fddd-4018-ab6d-15371110f701; _xsrf=e131438c70059bba0334c9e3db88b7ce; r_cap_id="ZmU0YjE3MTYxODA0NGJlNWEyMDllMGM5ZmRhODE1MTQ=|1496839475|13ad34cfb5d78aeedc91abd795ee6d43d09b5551"; cap_id="ZWQwODY5MGIzYjBiNDljNmFjNjIyZWUyNGZhYzA1ZGU=|1496839475|95dd53aaaedce2e87d425ee2853cf8aaad897d76"; q_c1=9f1b6363d63444ec97abcc006b32bb13|1496889163000|1494218050000; aliyungf_tc=AQAAAAZ4UiP6ZgAAM5zIcWMvLkOhe6zo; __utma=51854390.1175921522.1496889165.1496898057.1497003418.4; __utmb=51854390.0.10.1497003418; __utmc=51854390; __utmz=51854390.1496889165.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmv=51854390.100-1|2=registration_date=20160603=1^3=entry_date=20160603=1; capsion_ticket="2|1:0|10:1497003461|14:capsion_ticket|44:ZGRjMWU2Y2NiY2E2NDc5YjlhN2ZmNjAwNzk4Zjg1Yjc=|0e6b83272f59ff8d21c58354e123b95ab509995d37edd2775a837a567671243a"; unlock_ticket="AJDCINJ34AsmAAAAYAJVTfF8OllwfnWcRThUHrHwDMFlIOHOtDw96g=="; z_c0=Mi4wQUpEQ0lOSjM0QXNBUUlMQkxxbTVDeVlBQUFCZ0FsVk42UUppV1FEUmNKNU1XVC1EVkp2RlMzQTBvdXBvSXJpSmJB|1497003542|91d200ac3675fb4f7f95fd9c2260a45ff08dbdd4',
            'Referer': 'https://www.zhihu.com/',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
            'X-Requested-With': 'XMLHttpRequest',
            'X-Xsrftoken': '6593c414de85eb185094752125fd40de'
        }
    };
    return option;
}

// 他关注的人
function createUrlFollowees(people, offset, limit = 20) {
    const basic = people + '/followees?include=data[*].answer_count,articles_count,gender,follower_count,is_followed,is_following,badge[?(type=best_answerer)].topics&';
    let url = basic + 'offset=' + offset + '&limit=' + limit;
    return createHeader(url);
}

// 关注他的人
function createUrlFollowers(people, offset, limit = 20) {
    const basic = people + '/followers?include=data[*].answer_count,articles_count,gender,follower_count,is_followed,is_following,badge[?(type=best_answerer)].topics&';
    let url = basic + 'offset=' + offset + '&limit=' + limit;
    return createHeader(url);
}

// 他关注的问题
function createUrlFollowingQuestions(people, offset, limit = 20) {
    const basic = people + '/following-questions?include=data[*].created,answer_count,follower_count,author&';
    let url = basic + 'offset=' + offset + '&limit=' + limit;
    return createHeader(url);
}

// 他关注的专栏
function createUrlFollowingColumns(people, offset, limit = 20) {
    const basic = people + '/following-columns?include=data[*].intro,followers,articles_count&';
    let url = basic + 'offset=' + offset + '&limit=' + limit;
    return createHeader(url);
}

// 他关注的话题
function createUrlFollowingTopics(people, offset, limit = 20) {
    const basic = people + '/following-topic-contributions?include=data[*].topic.introduction&';
    let url = basic + 'offset=' + offset + '&limit=' + limit;
    return createHeader(url);
}

// 他提过的问题
// function createUrlFollowingColumns(people, offset, limit = 20) {
//     const basic = people + '/following-topic-contributions?include=data[*].topic.introduction&';
//     let url = basic + 'offset=' + offset + '&limit=' + limit;
//     return createHeader(url);
// }

// 他回答的问题
function createUrlAnswers(people, offset, limit = 20) {
    const basic = people + '/answers?include=data[*].is_normal,is_collapsed,collapse_reason,suggest_edit,comment_count,can_comment,content,voteup_count,reshipment_settings,comment_permission,mark_infos,created_time,updated_time,relationship.is_authorized,voting,is_author,is_thanked,is_nothelp,upvoted_followees;data[*].author.badge[?(type=best_answerer)].topics&sort_by=created&';
    let url = basic + 'offset=' + offset + '&limit=' + limit;
    return createHeader(url);
}

module.exports = {
    'createUrlFollowees': createUrlFollowees,
    'createUrlFollowers': createUrlFollowers,
    'createUrlFollowingQuestions': createUrlFollowingQuestions,
    'createUrlFollowingColumns': createUrlFollowingColumns,
    'createUrlFollowingTopics': createUrlFollowingTopics,
    'createUrlAnswers': createUrlAnswers
};