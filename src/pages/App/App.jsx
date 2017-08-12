import normalize from 'normalize.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import s from './App.css';

const ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: PropTypes.func.isRequired,
};

class App extends Component {
  static propTypes = {
    context: PropTypes.shape(ContextType).isRequired,
  };
  static childContextTypes = ContextType;

  getChildContext () {
    return this.props.context;
  }

  componentWillMount () {
    this.removeCSS = this.props.context.insertCss(normalize, s);
  }

  componentWillUnmount () {
    this.removeCSS();
  }

  render () {
    return (
      <div>Will be http://borodin.site as soon as possible. </div>
    );
  }
}

export default App;
