import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props: any): React.ReactElement {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script src='js/jquery.min.js'/>
        <script src='js/jquery-migrate-3.0.1.min.js'/>
        <script src='js/popper.min.js'/>
        <script src='js/bootstrap.min.js'/>
        <script src='js/jquery.easing.1.3.js'/>
        <script src='js/jquery.waypoints.min.js'/>
        <script src='js/jquery.stellar.min.js'/>
        <script src='js/owl.carousel.min.js'/>
        <script src='js/jquery.magnific-popup.min.js'/>
        <script src='js/aos.js'/>
        <script src='js/jquery.animateNumber.min.js'/>
        <script src='js/bootstrap-datepicker.js'/>
        <script src='js/jquery.timepicker.min.js'/>
        <script src='js/scrollax.min.js'/>
        <script src='js/main.js'/>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
