#!/usr/bin/env node

const Api = require('./lib/api')
const exec = require('./lib/exec')
const cTable = require('console.table')
const dotAV = require('./lib/dotAv')
const ora = require('ora')

require('colors')

const cliHelp = `

 ${ 'dd1024: 一个查看车牌的小工具 🔨'.red }

 $ ${ '使用'.blue }

  ${ 'dd1024 [车牌号]'.green }

 $ ${ '示例'.blue }
   
  ${ 'dd1024 sdde-537'.green }

`

;(async ()=> {

  const argv = process.argv

  if (argv.length < 3) {
    console.log(cliHelp)
    return
  }

  // TODO: 只获取到第一个参数
  const plate = argv[2].trim()

  const dd1024 = new Api
  const spinner = ora(`Loading: ${ plate }`).start()
  const now = await dd1024.getAvUrl(plate)

  if (now.playurl.length >= 1 && now.type == '.m3u8') {
    spinner.succeed('成功, 将自动播放, 快乐的学习吧!'.yellow)
    await exec(now.playurl[0])
  } else {
    spinner.fail(`车牌不存在, 请自行搜索车牌号`.blue)
  }

})()