import withStyles from 'HOC/withStyles';
import Component from 'inferno-component';
import s from './Greeting.css';

class Greeting extends Component {
  render () {
    return (
      <div className={ s.root }>
        <span className={ s.first }>I’m <span>Dmitriy Borodin</span></span>
        <span className={ s.second }>Full-stack developer by Javascript</span>
      </div>
    );
  }
}

export default withStyles(s)(Greeting);
