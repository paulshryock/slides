const { Button } = require('./components.js')
const { sum } = require('./lib.js')
const React = require('react')
const { createRoot } = require('react-dom/client')

function init() {
  function onClick() {
    window.alert(`sum(1, 2) === ${sum(1, 2)}`)
  }

  const appContainer = document.createElement('div')
  document.querySelector('.slide__content')?.appendChild(appContainer)
  createRoot(appContainer).render(<Button label='Click me' onClick={onClick} />)
}

init()

module.exports = {
  init,
}
