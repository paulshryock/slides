const { sum } = require('../../src/lib.js')

describe('sum', () => {
  it.each([
    [0, 0, 0],
    [1, 1, 2],
    [1, 2, 3],
    [2, 2, 4],
    [5, 10, 15],
  ])('sums %s and %s: %s', (a, b, total) => {
    expect(sum(a, b)).toBe(total)
  })
})
