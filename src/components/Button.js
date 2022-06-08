const React = require('react')

function Button({ label, ...props }) {
  if (!label) return null

  return (<button type='button' {...props}>{label}</button>)
}

module.exports = {
  Button,
}
