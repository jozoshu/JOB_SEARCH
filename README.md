# JOB_SEARCH

### 개발환경 
- **OS**: Mac on M1 (local)
- **Framework**: Express 4.17.1 (in Node: 14.17.6 / npm: 6.14.15)
- **Database**: PostgreSQL 12.7


# 1. Environment

## 1.1 Install libraries
~~~bash
$> npm install 
~~~

## 1.2 Set .env file 
~~~bash
$> cp .env.example .env
$> vim .env

ENV=local
PORT=3000

DB_HOST=127.0.0.1
DB_NAME=jozoshu
...
~~~
환경변수 세팅

## 1.3 Run~!
~~~bash
$> npm start
~~~
