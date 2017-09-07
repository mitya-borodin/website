import withStyles from 'HOC/withStyles';
import Component from 'inferno-component';
import s from './Ava.css';
import avaJPG from 'static/ava2.jpg';

const curlyBracesLeft = '{';
const curlyBracesRight = '}';

class Ava extends Component {
  render () {
    return (
      <div className={ s.root }>
        <div className={ s.letters }>
          <span className={ s.curlyBraceLeft }>{ curlyBracesLeft }</span>
          <span className={ s.curlyBraceRight }>{ curlyBracesRight }</span>
          <span className={ s.plus }>{ '+' }</span>
          <div className={ s.circleRight }/>
          <div className={ s.circleLeft }/>
          <div className={ s.rect }/>
        </div>
        <img src={ avaJPG }/>
      </div>
    );
  }
}

export default withStyles(s)(Ava);
