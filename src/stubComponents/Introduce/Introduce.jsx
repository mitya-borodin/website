import withStyles from 'HOC/withStyles'
import Component from 'inferno-component'
import s from './Introduce.css'
import ava from './IntroduceAva.css'
import name from './IntroduceName.css'

class Introduce extends Component {
  render () {
    const curlyBracesLeft = '{'
    const curlyBracesRight = '}'

    return (
      <div className={s.root}>
        <div className={ava.root}>
          <div className={ava.letters}>
            <span className={ava.curlyBraceLeft}>{curlyBracesLeft}</span>
            <span className={ava.curlyBraceRight}>{curlyBracesRight}</span>
            <span className={ava.plus}>{'+'}</span>
            <div className={ava.circleRight}/>
            <div className={ava.circleLeft}/>
            <div className={ava.rect}/>
          </div>
          <img/>
        </div>
        <div className={name.root}>
          <span className={name.first}>I’m <span>Dmitriy Borodin</span></span>
          <span className={name.second}>Full-stack developer by Javascript</span>
        </div>
        <div className={s.contact}>
          {'contact me now'.toLocaleUpperCase()}
        </div>
      </div>
    )
  }
}

export default withStyles(s, ava, name)(Introduce)
