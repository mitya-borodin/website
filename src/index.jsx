import { render } from 'inferno'
import App from 'pages/App'

let container
const context = {
  insertCss: (...styles) => {
    // eslint-disable-next-line no-underscore-dangle
    const removeCss = styles.map(x => x._insertCss())
    return () => { removeCss.forEach(f => f()) }
  },
}

const run = (Component) => {
  render(<Component context={context}/>, container)
}

document.addEventListener('DOMContentLoaded', () => {
  container = document.getElementById('REACT_APP')
  document.getElementById('css').remove()

  run(App)
})

if (module.hot) {
  module.hot.accept('pages/App', () => {
    run(App)
  })
}
