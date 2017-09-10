import withStyles from 'HOC/withStyles';
import Component from 'inferno-component';
import s from './Contact.css';

class Contact extends Component {
  render () {
    return (
      <div className={ s.root }>
        { 'contact me now'.toLocaleUpperCase() }
      </div>
    );
  }
}

export default withStyles(s)(Contact);
