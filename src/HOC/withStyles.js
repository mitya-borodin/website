import PropTypes from 'prop-types'
import Component from 'inferno-component'
import hoistNonInfernoStatic from 'hoist-non-inferno-statics'

const contextTypes = {
  insertCss: PropTypes.func,
}

function withStyles (...styles) {
  return function wrapWithStyles (ComposedComponent) {

    class WithStyles extends Component {
      componentWillMount () {
        this.removeCss = this.context.insertCss(...styles)
      }

      componentWillUnmount () {
        if (this.removeCss) {
          setTimeout(this.removeCss, 0)
        }
      }

      render () {
        return <ComposedComponent {...this.props} />
      }
    }

    const displayName = ComposedComponent.displayName || ComposedComponent.name || 'Component'

    WithStyles.displayName = `WithStyles(${displayName})`
    WithStyles.contextTypes = contextTypes
    WithStyles.ComposedComponent = ComposedComponent

    return hoistNonInfernoStatic(WithStyles, ComposedComponent)
  }
}

export default withStyles
