'use strict';
const createHeader = require('./header.js')

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