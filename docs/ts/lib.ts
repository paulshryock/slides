const slides = require('../data/slides.js')

function navigate(event: any) {
  const path = window.location.pathname
  switch (event.key) {
    case 'ArrowRight':
      if (path === `/${slides.length}/`) {
        break;
      } else if (path === '/') {
        window.location.href = '/1/'
      } else {
        window.location.href = `/${parseInt(path.split('/')?.[1]) + 1}/`
      }
      break;
    case 'ArrowLeft':
      if (path === '/') {
        break;
      } else if (path === '/1/') {
        window.location.href = '/'
      } else {
        window.location.href = `/${parseInt(path.split('/')?.[1]) - 1}/`
      }
      break;
  }
}

module.exports = {
  navigate,
}
