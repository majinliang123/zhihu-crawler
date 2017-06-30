# zhihu-crawler ![Build Status](https://travis-ci.org/majinliang123/zhihu-crawler.svg?branch=develop) ![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103) ![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)

### a crawler for zhihu(https://www.zhihu.com)

# Init

* install nodejs and its version is 8.0.0
* install dependencies by running 'npm install'， if it can't run successfully, you could run yarn install

# Run

node ./cluster/master.js

# Project Structure

I will create many proccess according to your CPU numbers.(in folder 'cluster')

Each proccess deal with a user's information.(in folder 'fetcher')

communicate with mongoDB by mongoose(in folder 'model')

# Tips

* If you when you run and it says 'SyntaxError: Unexpected token < in JSON at position 0', i think the reason is the cookie is expired and you need update it

* If you run the program up to 20 mins, the zhihu website may lock your account. Be careful.

# Welcome

welcome your star

welcome your pull request and advise
