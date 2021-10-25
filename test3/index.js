const axios = require('axios')
const cheerio = require('cheerio')
const log = console.log

const getHtml = async () => {
  try {
    return await axios.get('https://www.signal.bz/')
    // 네이버 실시간 검색이 사라져서 대체 페이지 연결
  } catch (error) {
    console.error(error)
  }
}

getHtml()
  .then(html => {
    let ulList = []
    const $ = cheerio.load(html.data)
    const $bodyList = $("div.realtime-rank div.rank-column").children("div")

    $bodyList.each((i, elem) => {
      ulList[i] = {
        title: $(this).find('span.rank-text').text(),
        url: $(this).find('a.rank-layer').attr('herf')
      }
    })
    // console.log('bodyList :>>', $bodyList)
    // console.log('ulList :>>', ulList)

    const data = ulList.filter(n => n.url)
    return data
  })
  .then(res => log(res))
