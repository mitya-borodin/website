import withStyles from 'HOC/withStyles';
import Component from 'inferno-component';
import ExecutionEnvironment from 'utils/ExecutionEnvironment';
import s from './Layout.css';

class Layout extends Component {

  componentWillMount () {
    if (ExecutionEnvironment.canUseDOM) {
      const htmlElement = document.getElementsByTagName('html')[0];
/*      const H960W1440 = 66.66;
      const W1440H960 = 150;*/

      const setBaseFontSize = () => {
        const { width, height } = htmlElement.getBoundingClientRect();
/*        const WH = (width * 100) / height;
        const HW = (height * 100) / width;*/
        let baseFontSize = width / 1440;


          baseFontSize = Math.min( width/1440, height/ 960 );


        console.log(width, baseFontSize);

        htmlElement.style.cssText = `font-size: ${baseFontSize}px`;
      };

      window.addEventListener('resize', setBaseFontSize);

      setBaseFontSize();
    }
  }

  render () {
    const { introduce, about } = this.props;

    return (
      <div className={ s.root }>
        <div>{ introduce }</div>
        <div>{ about }</div>
      </div>
    );
  }
}

export default withStyles(s)(Layout);
