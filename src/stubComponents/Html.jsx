const html = ({ styles, scripts, children }) => (
  <html className="no-js" lang="en" style={ { opacity: 0 } }>
  <head>
    <meta charSet="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
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
  {
    scripts.map((script) => <script key={ script } src={ script }/>)
  }
  </body>
  </html>
);

export default html;
