import Component from 'inferno-component';
import normalize from 'normalize.css';
import propTypes from 'prop-types';
import AboutMe from 'stubComponents/AboutMe';
import Me from 'stubComponents/Me';
import Layout from 'stubComponents/Layout';
import s from './App.css';

const ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: propTypes.func.isRequired,
};

class App extends Component {
  static propTypes = {
    context: propTypes.shape(ContextType).isRequired,
  };
  static childContextTypes = ContextType;

  componentWillMount () {
    this.removeCSS = this.props.context.insertCss(normalize, s);
  }

  componentWillUnmount () {
    this.removeCSS();
  }

  getChildContext () {
    return this.props.context;
  }

  render () {
    return (
      <Layout
        introduce={ <Me/> }
        about={ <AboutMe/> }
      />
    );
  }
}

export default App;
