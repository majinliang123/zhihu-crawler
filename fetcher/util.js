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
            'Cookie': 'q_c1=a1f88b4836f54264aecef328b1b5aa45|1497753595000|1497753595000; _xsrf=a4127a1aec2628f05f77235158cb4b19; d_c0="AEAChUjK7guPTgrnmhKaqbHWvPsfOLm4Kpg=|1497783498"; _zap=5e589146-0444-42c0-a47e-ecc5b351ff51; aliyungf_tc=AQAAABLPcjBqjA4AQDUjOvzVUlySr0b5; l_n_c=1; l_cap_id="MmVlYWJiZWQyNTQ1NGRlZjgwNDViMWQ1MGJlZTU3MTI=|1498831622|28bf45e03e6fc65e49ca9258b398991471349542"; cap_id="MjkwNDMwMmVlMWI2NDI4YzhkYzY4NjIzNTk1OTYwNjQ=|1498831622|3d72e522dc4bbb3893149584408e2fddc3c9d2a5"; capsion_ticket="2|1:0|10:1498831644|14:capsion_ticket|44:NmEwMjJlOGI0ODdkNGRjMGJiYTgyYTA1NWI1N2FhNjQ=|146b5f9dce22f7d9b71c84473ef9e33b2816cfb20995a479e1de5e0e18382e0a"; __utma=51854390.973626249.1497783502.1498825785.1498831648.6; __utmb=51854390.0.10.1498831648; __utmc=51854390; __utmz=51854390.1498831648.6.3.utmcsr=zhihu.com|utmccn=(referral)|utmcmd=referral|utmcct=/people/hua-tai-xiang-94/activities; __utmv=51854390.000--|2=registration_date=20160603=1^3=entry_date=20170618=1; auth_type=cXFjb25u|1498831665|5d4f138ab5b816603c1ccd9a833f46a6ae24fcf4; atoken=AC0580BDBFB9FA8E8A1FD70AB4F6CBB9; atoken_expired_in=7776000; token="QUMwNTgwQkRCRkI5RkE4RThBMUZENzBBQjRGNkNCQjk=|1498831665|6f288f2c19557b6dd3c6d4cc1a8018cb8abdca7f"; client_id="RERGRDg0MTk1MDYzOUVEOEUyMDA1RjY0MEYwMDJCNEE=|1498831665|c4f31e851d477f072b7da3a84a134907ba690311"; z_c0=Mi4wQUlEQzI4bG9fZ3NBUUFLRlNNcnVDeGNBQUFCaEFsVk5RdWg5V1FCUWw4WTN3Z3VhMmxnYjZJMVcwb0I0QjRYTHNB|1498831682|c58213702aed9a804220b7eb538aa5e546a7047e; unlock_ticket="QUlEQzI4bG9fZ3NYQUFBQVlRSlZUVXBpVmxsT0pXUHN0X0Y1T2hWaVltanEtZjBLeDR0UFlBPT0=|1498831682|01cdf94cfa5fcb3e1fb09affd36bb200a2f578ca"; _xsrf=a4127a1aec2628f05f77235158cb4b19',
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