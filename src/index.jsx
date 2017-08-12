import App from 'pages/App';
import React from 'react';
import ReactDOM from 'react-dom';

let container;

const context = {
  insertCss: (...styles) => {
    // eslint-disable-next-line no-underscore-dangle
    const removeCss = styles.map(x => x._insertCss());
    return () => {
      removeCss.forEach(f => f());
    };
  },
};

const render = (Component) => {
  ReactDOM.render(<Component context={ context }/>, container);
};

document.addEventListener('DOMContentLoaded', () => {
  container = document.getElementById('REACT_APP');

  render(App);
});

if (module.hot) {
  module.hot.accept('pages/App', () => {
    render(App);
  });
}
