/*
** creat by @d1y in 2019-10-23
** @tips { 运行系统命令 }
** @fix { 后端使用`mpv` }
** @TODO
*/

const child_process = require('child_process')

const run = url=> {
  child_process.exec(`mpv ${ url }`)
}

module.exports = run