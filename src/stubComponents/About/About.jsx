import withStyles from 'HOC/withStyles';
import Component from 'inferno-component';
import s from './About.css';

class About extends Component {
  render () {
    return (
      <div className={ s.root }>
        About
      </div>
    );
  }
}

export default withStyles(s)(About);
