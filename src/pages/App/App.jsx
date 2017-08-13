import normalize from 'normalize.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import s from './App.css';

const ContextType = {
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
      <div>
        <span>Will be http://borodin.site as soon as possible.</span>
      </div>
    );
  }
}

export default App;
