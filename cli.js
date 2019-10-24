#!/usr/bin/env node

const Api = require('./lib/api')
const exec = require('./lib/exec')

;(async ()=> {
  const argv = process.argv
  
  // TODO: 只获取到第一个参数
  const plate = argv[2].trim()
  // console.log('车牌号: ', plate)

  const dd1024 = new Api

  const now = await dd1024.getAvUrl(plate)
  // console.log(now)
  if (now.playurl.length >= 1 && now.type == '.m3u8') {
    exec(now.playurl[0])
  }
})()