import PropTypes from 'prop-types';
import React from 'react';

const html = ({ title, description, styles, children }) => (
  <html className="no-js" lang="en">
  <head>
    <title>{ title }</title>

    <meta charSet="utf-8"/>
    <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
    <meta name="description" content={ description }/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <link rel="apple-touch-icon" href="apple-touch-icon.png"/>

    {
      styles.map(style => (
        <style
          key={ style.id }
          id={ style.id }
          dangerouslySetInnerHTML={ { __html: style.cssText } }
        />
      ))
    }

  </head>
  <body>
    <div id="REACT_APP" dangerouslySetInnerHTML={ { __html: children } }/>
  </body>
  </html>
);

html.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  styles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    cssText: PropTypes.string,
  }).isRequired),
  children: PropTypes.string,
};

html.defaultProps = {
  styles: [],
};

export default html;
