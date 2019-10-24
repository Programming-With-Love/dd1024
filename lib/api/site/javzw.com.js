/*
** site: http://javzw.com
** create by @d1y in 2019-10-23
*/

const Av = require('../av')
const site = 'https://javzw.com'
const router = Av._router(site)

class Javzw extends Av {

  static SiteInfo = {
    site,
    logo: ''
  }

  async getAvUrl(plate = 'DAVK-042') {
    let HTML = await this.getData({
      url: router(plate)
    })
    HTML = HTML.data
    let result = {
      title: '',
      type: null,
      plate,
      playurl: [],
      cover: [],
      preview: []
    }
    try {
      const $ = this._strAsHtml(HTML)
      let title = $('title').text()
      let type = '.m3u8'
      const videosEle = $('#my-player')[0]
      let cover = [ videosEle.attribs.poster ]
      const sourceEle = videosEle.children[1]
      let playurl = [ sourceEle.attribs.src ]
      result = {
        title,
        type,
        plate,
        playurl,
        cover,
      }
    } catch(err) {
      console.error(err)
    }
    console.log(result)
    return result
  }

}

if (typeof module != 'undefined' && !module.parent) {
  const dd = new Javzw
  dd.getAvUrl()
}

module.exports = Javzw