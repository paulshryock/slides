const { init } = require('../src/app.js')

describe('init', () => {
  it('does not throw an error', () => {
    expect(() => (init())).not.toThrow()
  })
})
