# stock analysis
[![Build status](https://github.com/mengsixing/cdfang-spider/workflows/ci/badge.svg)](https://github.com/mengsixing/cdfang-spider/actions)
[![codecov](https://codecov.io/gh/mengsixing/cdfang-spider/branch/main/graph/badge.svg)](https://codecov.io/gh/mengsixing/cdfang-spider)
[![David](https://img.shields.io/david/mengsixing/cdfang-spider.svg)](https://david-dm.org/mengsixing/cdfang-spider)

> 今日大A数据分析

统计每日收盘以后所有妖仔涨停分析，通过图表显示出来。

## Preview
在线预览： [财富密码](https://ppopochiu.com)

源代码：[锄头地址](https://github.com/benjamin0809)

## Features

- [x] 动力源
- [ ] Number 数据同步最新
- [ ] Number 数据分析
- [ ] 首页，每日涨跌分析
- [ ] 首页，板块资金情况
- [ ] 大师精选，陈万贤老师推荐
- [ ] 首页，龙虎榜
- [ ] 首页，北上资金


## Technology


主要用到的技术：
- Vue：MVVM 框架，用于构建前端界面。
- Element：基于 Vue 的组件库。
- Echarts：基于 Vue 的图表库。
- Scss：CSS 预处理器，提供变量、计算、嵌套、Mixin、函数等。
- Webpack：打包前端项目，生成静态文件。
- Apollo：基于 GraphQL 封装，用于搭建后端 GraphQL 支持和前端数据请求。
- Koa：后端 Web 层框架，用于接收请求，进行处理。
- Cheerio：解析抓取的 HTML 数据。
- Mongoose：为 MongoDB 定义数据模型。
- Gulp：打包后端项目，编译 TS 语法。
- Jest：测试前后端项目，单元测试，API 测试等。
- Typescript：为 JS 提供良好的类型检查功能，能编译出高质量的 JS 代码。

项目没有使用脚手架工具搭建，都是一步一步配置而成。具体的搭建流程：[项目选型与环境搭建](https://github.com/mengsixing/cdfang-spider/blob/master/Introduction.md)。

## start
```shell

# clone with git bash
git clone https://github.com/benjamin0809/stock-analysis.git

# change directory
cd stock-analysis

# install dependencies
npm i

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```


## Deploy

```shell
# clone with Git Bash
git clone https://github.com/benjamin0809/stock-analysis.git

# change directory
cd stock-analysis/docker

# run docker containers. It may take a long time.
docker-compose up -d

# server running at localhost:8082
```
## License

[MIT](https://github.com/benjamin0809/stock-analysis/blob/master/LICENSE)

Copyright (c) 2021 benjamin0809
