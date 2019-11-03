/*
** creat by @d1y in 2019-10-23
** @tips { 运行系统命令 }
** @fix { 后端使用`mpv` }
*/

const mpvPlay = require('mpv-play')

module.exports = async url=> mpvPlay(url)