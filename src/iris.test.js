import assert from 'assert'

import Iris from './iris'

describe('Iris', function() {
  describe('parse(url)', function() {
    this.timeout(1000000)
    it('does the whole thing', async function() {
      const result = await Iris.parse('http://theconcourse.deadspin.com/phyllis-schlafly-finally-croaks-1786219220')

      // console.log(result)
    })

    it('does blogger', async function() {
      const result = await Iris.parse('https://googleblog.blogspot.com/2016/08/onhub-turns-one-today.html')

      // console.log(result)
    })

    it('does wikipedia', async function() {
      const result = await Iris.parse('https://en.wikipedia.org/wiki/Brihadeeswarar_Temple_fire')

      // console.log(result)
    })

    it('does the nyt', async function() {
      const result = await Iris.parse('http://www.nytimes.com/2016/08/16/upshot/the-state-of-the-clinton-trump-race-is-it-over.html?_r=0')

      // console.log(result)
    })

    it('does ars pagination', async function() {
      const url = 'http://arstechnica.com/gadgets/2016/08/the-connected-renter-how-to-make-your-apartment-smarter/'
      const result = await Iris.parse(
        url,
        null,
        { fetchAllPages: true }
      )

      // console.log(result)
      assert.equal(result.nextPageUrl, `${url}2`)
      // console.log(result.content)
    })

  })
})
