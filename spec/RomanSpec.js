'use strict'
/*global jasmine, beforeEach, afterEach, describe, expect, it, spyOn, xdescribe, xit */

describe('A roman numeral converter', function () {
  var roman = require('../src/roman')

  it('should return a 1 when passed I', function () {
    expect(roman('I')).toBe(1)
  })
  it('should return a 2 when passed II', function () {
    expect(roman('II')).toBe(2)
  })
  it('should return a 4 when passed IV', function () {
    expect(roman('IV')).toBe(4)
  })
  it('should return a 5 when passed V', function () {
    expect(roman('V')).toBe(5)
  })
  it('should return a 9 when passed IX', function () {
    expect(roman('IX')).toBe(9)
  })
  it('should return a 10 when passed X', function () {
    expect(roman('X')).toBe(10)
  })
  it('should return a 2018 when passed MMXVII', function () {
    expect(roman('MMXVIII')).toBe(2018)
  })
  it('should return a 2019 when passed MMXIX', function () {
    expect(roman('MMXIX')).toBe(2019)
  })
})

// gilded rose kata
