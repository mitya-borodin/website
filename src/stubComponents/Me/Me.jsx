import withStyles from 'HOC/withStyles';
import Component from 'inferno-component';
import Ava from 'stubComponents/Ava';
import Contact from 'stubComponents/Contact';
import Greeting from 'stubComponents/Greeting';
import Icons from 'stubComponents/Icons';
import s from './Me.css';

class Me extends Component {
  render () {
    return (
      <div className={ s.root }>
        <Ava/>
        <Greeting/>
        <Contact/>
        <Icons/>
      </div>
    );
  }
}

export default withStyles(s)(Me);
