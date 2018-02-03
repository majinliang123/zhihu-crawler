# zhihu-crawler ![Build Status](https://travis-ci.org/majinliang123/zhihu-crawler.svg?branch=develop) ![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103) ![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)

[![Greenkeeper badge](https://badges.greenkeeper.io/majinliang123/zhihu-crawler.svg)](https://greenkeeper.io/)

### a crawler for zhihu(https://www.zhihu.com)

# Init

* install nodejs and its version is 7.9.0
* install dependencies by running 'npm install'， if it can't run successfully, you could run yarn install
* insert init data into database. run the below command:
* * use zhihu; db.user.insert({token: 'xiao-ma-86-12-82'}); db.user.insert({token:'bu-yi-mi-ya'}); db.user.insert({token:'tian-feng-feng-92'}); db.user.insert({token: 'a-li-kof'});

# Run

node ./cluster/master.js

# Project Structure

I will create many proccess according to your config(default it is the number of CPU).

Each proccess deal with a user's information.(in folder 'fetcher')

communicate with mongoDB by mongodb(in folder 'db')

# Tips

* If you when you run and it says 'SyntaxError: Unexpected token < in JSON at position 0', i think the reason is the cookie is expired and you need update it in config.

* If you run the program up to 20 mins, the zhihu website may lock your account. Be careful. But you could set interval time in config to control the time during the two request.

# Welcome

welcome your star

welcome your pull request and advise
