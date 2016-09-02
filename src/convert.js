const convertKeyframes = require('./keyframes')
const convertEffect = require('./effects')
const { bindTiming } = require('./timings')

const convert = (keyframeInput, animateEffect) => {
  return {
    keyframs: bindTiming(convertKeyframes(keyframeInput)),
    animateEffect: convertEffect(keyframeInput, animateEffect)
  }
}

module.exports = convert
