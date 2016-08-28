const { keyframeProperties } = require('../src/keyframeProperties')
const assert = require('assert')

describe('convertKeyframes', function () {
  it('convert object to array', () => {
    const input = {
      opacity: [0.5, 1],
      transform: ['scale(0.5)', 'scale(1)'],
    }
    const expect = [{
      opacity: 0.5,
      transform: 'scale(0.5)',
    }, {
      opacity: 1,
      transform: 'scale(1)'
    }]
    assert.deepEqual(keyframeProperties(input), expect)
  })
  it('convert object with easing', () => {
    const input = {
      opacity: [0.5, 1],
      transform: ['scale(0.5)', 'scale(1)'],
      easing: 'ease-in-out',
    }
    const expect = [{
      opacity: 0.5,
      transform: 'scale(0.5)',
    }, {
      opacity: 1,
      transform: 'scale(1)'
    }]
    assert.deepEqual(keyframeProperties(input), expect)
  })
  it('enable array', () => {
    const input = [{
      opacity: 0.5,
      transform: 'scale(0.5)',
    }, {
      opacity: 1,
      transform: 'scale(1)'
    }]
    assert.deepEqual(keyframeProperties(input), input)
  })
});