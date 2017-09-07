import withStyles from 'HOC/withStyles';
import Component from 'inferno-component';
import s from './AboutMe.css';

class AboutMe extends Component {
  render () {
    return (
      <div className={ s.root }>
        AboutMe
      </div>
    );
  }
}

export default withStyles(s)(AboutMe);
