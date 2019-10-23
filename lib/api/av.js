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

// uitls
const stringRandom = require('string-random')

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

  /* @return <string> */
  _utils_stringRandom = ()=> stringRandom()

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
    let body = '', isJson = false
    method = method.toUpperCase()
    typeof data != 'string' && (()=> {
      // @fix: 为了防止缓存. 可能是最傻的解决的解决办法
      data[this._utils_stringRandom()] = Date.now()
      data = qs.stringify(data)
    })()
    if (method == 'GET') {
      url += '?' + data
    } else if (method == 'POST'){
      body = data
    }
    const fetchDoor = {
      // TODO: 验证那些事, 先不考虑
      method
    }
    if (method == 'POST') fetchDoor.body = body
    xFetch(url,fetchDoor).then(r=> {
      try {
        result = r.json()
      } catch(err) {
        result = r.text()
      }
      console.log(`res: `, r)
      return result
    }).catch(err=> {
      console.error('出错了')
      // TODO: 状态码不是 `200`
      throw new Error(`log: `, err)
    })
    return {
      isJson
    }
  }

}

// nodejs run main, like python __name__ == '__main__'
// http://cn.voidcc.com/question/p-kajkeqql-wh.html
if (typeof module != 'undefined' && !module.parent) {
  const dev = new Av
  dev.getData({
    url: 'https://www.javzw.com/DAVK-042'
  })
}