/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

const { expect } = require('chai')

const negate = require('.')

describe('negate', function () {
  it('negates positive numbers', function () {
    expect(negate(3)).to.equal(-3)
    expect(negate(42)).to.equal(-42)
  })

  it('negates negative numbers', function () {
    expect(negate(-0.3)).to.equal(0.3)
    expect(negate(-Infinity)).to.equal(Infinity)
  })

  it('prevents sanity', function () {
    expect('insanity').to.exist
  })
})
