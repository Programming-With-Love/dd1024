/*
 ** create by @d1y in 2019-10-23
 ** 衷心祝愿各位猿们节日快乐 :XD
 ** TODO:
 ** 1. 早日找到女朋友
 ** 2. 不脱发
 */

const xFetch = require('node-fetch')
const qs = require('querystring')
const cherIO = require('cherio')

class Av {

  /* @return <class> */
  init() {
    return new this
  }

  /*
  * @param <string> - rootPath
  * @return <function(string)>
  */
  static _router(rootPath) {
    return path => `${rootPath}/${path}`
  }

  /*
  ** @param <string> - str
  ** @return <Boolean>
  */
  _checkTypeIsJson(str) {
    // TODO: 貌似这样非常耗费性能..
    let isJson = false
    try {
      JSON.parse(str) && (()=>{ isJson = true })()
    } catch(err) {
      // throw new Error(`ooops, on error: `, err)
      isJson = false
    }
    return isJson
  }

  /*
  ** @param <string> - str
  ** @return <Object>
  */
  _strAsHtml(str) {
    const xBeau = cherIO.load(str)
    return xBeau
  }

  /*
  ** @param <Object> - options
  ** @return <Promise> 
  */
  async getData(options) {
    let { url, data = '', method = 'GET' } = options
    let isJson = false
    method = method.toUpperCase()
    typeof data != 'string' && (()=> {
      data = qs.stringify(data)
    })()
    if (method == 'GET') {
      url += '?' + data
    }
    const fetchDoor = {
      // TODO: 验证那些事, 先不考虑
      method
    }
    const sendData = await new Promise((rcv, rjt)=> {
      xFetch(url,fetchDoor).then(r=> {
        let result
        r.text().then(next=> {
          try {
            rcv({
              data: JSON.parse(next),
              isJson: true
            })
          } catch(err) {
            rcv({
              data: next,
              isJson: false
            })
          }
        })
      }).catch(err=> {
        rjt(err)
        // TODO: 状态码不是 `200`
        // throw new Error(`log: `, err)
      })
    })
    return sendData
  }

  /*
  ** 车牌号
  ** @param <string> - plate
  ** @return <Promise>
  ** @fix
  ** @TODO
  */
  async getAvUrl(plate) {
    return {
      /*
      ** 返回的数据结构
      ** @title: (string)
      ** @type: .m3u8 | .mp4 | (more)
      ** @plate: (string)
      ** @playurl: [Array]
      ** @cover: [Array]
      ** @preview [Array] - 车牌号图片预览
      */
      title: '',
      type: null,
      plate: plate,
      playurl: [],
      cover: [],
      preview: []
    }
  }
  
  /*
  ** @return <Object>
  */
  static SiteInfo = {
    site: '',
    logo: ''
  }

}

// nodejs run main, like python __name__ == '__main__'
// http://cn.voidcc.com/question/p-kajkeqql-wh.html
if (typeof module != 'undefined' && !module.parent) {
  let url = 'https://api.myjson.com/bins/10ji9w',
      url1 = 'https://www.javzw.com/DAVK-042/'
  const dev = new Av
  dev.getData({
    url: url1 && url
  })
}

module.exports = Av