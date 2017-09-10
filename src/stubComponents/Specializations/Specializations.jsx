import withStyles from 'HOC/withStyles';
import Component from 'inferno-component';
import s from './Specializations.css';

const Specialization = (
  {
    title = 'front-end',
    li = [
      'Web',
      'Mobile-web',
      'Hybrid applications powered by Apache Cordova',
      'Mobile-applications powered by react-native',
      'SVG',
      'WebGL'
    ]
  }
) => (
  <div className={ s.specialization }>
    <div>{ title.toUpperCase() }</div>
    <ul>
      {
        li.map((val) => (<li key={ val }><span>{ val }</span></li>))
      }
    </ul>
  </div>
);

class TextSection extends Component {
  render () {
    return (
      <section className={ s.root }>
        <h1>{ 'Specializations'.toUpperCase() }</h1>
        <div>
          <div className="blue">
            <Specialization/>
          </div>
          <div className="green">
            <Specialization
              title="back-end"
              li={
                [
                  'Node.js',
                  'MongoDB',
                  'Web-server',
                  'Implementation of API (JSON RCP, GraphQL, REST, CRUD)',
                  'Integrations with other API',
                  'NoSQL database',
                  'DevOps',
                  'Real time system (web socket)'
                ]
              }
            />
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(s)(TextSection);
