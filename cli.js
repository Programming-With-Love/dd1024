#!/usr/bin/env node

const Api = require('./lib/api')
const exec = require('./lib/exec')
const cTable = require('console.table')
const dotAV = require('./lib/dotAv')

require('colors')

;(async ()=> {
  const argv = process.argv
  if (argv.length < 3) {
    let throwMsg = `请传递车牌号:`
    console.log(throwMsg.blue)
    console.table(`车站: `.red, dotAV)
    return
  }
  // TODO: 只获取到第一个参数
  const plate = argv[2].trim()
  console.log('车牌号: ', plate)
  const dd1024 = new Api

  const now = await dd1024.getAvUrl(plate)
  // console.log(now)
  if (now.playurl.length >= 1 && now.type == '.m3u8') {
    exec(now.playurl[0])
  } else {
    console.log(`车牌不存在, 请自行搜索车牌号`.blue)
  }
})()