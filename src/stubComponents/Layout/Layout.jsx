import withStyles from 'HOC/withStyles';
import Component from 'inferno-component';
import ExecutionEnvironment from 'utils/ExecutionEnvironment';
import s from './Layout.css';

class Layout extends Component {

  componentWillMount () {
    if (ExecutionEnvironment.canUseDOM) {
      const htmlElement = document.getElementsByTagName('html')[0];
      const H960W1440 = 66.66;
      const W1440H960 = 150;

      const setBaseFontSize = () => {
        const { width, height } = htmlElement.getBoundingClientRect();
        const WH = (width * 100) / height;
        const HW = (height * 100) / width;
        let baseFontSize = width / 1440;

        if (width >= 1440) {
          const diffHW = (HW - H960W1440) / 100;
          const diffWH = (WH - W1440H960) / 100;

          let _height = height - 960 * diffHW;
          let _width = width - 720 * diffWH;


          baseFontSize = Math.sqrt((width / 2) ** 2 + height ** 2) / Math.sqrt(1440 ** 2 + 960 ** 2);


          console.log('height', 960 * baseFontSize);
          console.log('width', 720 * baseFontSize - width / 2 );


        } else if (width >= 1024 && width < 1440) {
          baseFontSize = Math.sqrt(width ** 2 + height ** 2) / Math.sqrt(1024 ** 2 + 768 ** 2);
        }

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
