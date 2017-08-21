import Component from 'inferno-component';
import s from './Cards.css';
import withStyles from 'HOC/withStyles';

class Cards extends Component {
  render() {
    return (
      <span className={s.root}>CARDS</span>
    );
  }
}

export default withStyles(s)(Cards);
