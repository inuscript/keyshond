const { StyleSheet, css } = require('aphrodite/no-important')
const { convert } = require('../lib/index')
const FreeStyle = require('free-style')
const { el, mount, className, attrs, text, children} = require('redom')


// helpers
const cl = (label, clsName) => {
  const div = el('div')
  const item = div(
    text(label),
    className(clsName),
    attrs({
      style: 'width: 400px'
    })
  )
  return item
}
const createElement = (label) => {
  mount(document.body, cl(label))
}

const native = (label, keyframeInput, keyframeOption) => {
  let elem = cl(label)
  let anim = elem.animate(keyframeInput, keyframeOption);
  return elem
}

const aphrodite = (label, keyframeInput, keyframeOption) => {
  let animateProps = convert(keyframeInput, keyframeOption)
  const style = StyleSheet.create({
    item: Object.assign({}, animateProps)
  })
  return cl(label, css(style.item))
}

const freestyle = (label, keyframeInput, keyframeOption) => {
  let Style = FreeStyle.create()
  let animateProps = convert(keyframeInput, keyframeOption)
  let ANIMATION = Style.registerKeyframes(animateProps.animationName)
  let STYL = Style.registerStyle(Object.assign(animateProps, {
    animationName: ANIMATION
  }))
  Style.inject()

  return cl(label, STYL)
}

const sample = ({label, keyframeInput, keyframeOption}) => {
  const container = el('div')
  const samples = container(children([
    cl(`====${label}=====`),
    native("elem.animate=" + label, keyframeInput, keyframeOption),
    aphrodite("aphrodite=" + label, keyframeInput, keyframeOption),
    freestyle("freestyle=" + label, keyframeInput, keyframeOption),
  ]))
  mount(document.body, samples)
}
module.exports = {
  createElement, sample
}