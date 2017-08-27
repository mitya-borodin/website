import Component from 'inferno-component'
import s from './Layout.css'
import withStyles from 'HOC/withStyles'

class Layout extends Component {
  render() {
    const {introduce, about} = this.props;

    return (
      <div className={s.root}>
        <div>{introduce}</div>
        <div>{about}</div>
      </div>
    )
  }
}

export default withStyles(s)(Layout)
