import React from 'react';

type Props = {
  htmlAttributes: object;
  headComponents: Array<unknown>;
  bodyAttributes: object;
  preBodyComponents: Array<unknown>;
  body: string;
  postBodyComponents: Array<unknown>;
};
type State = {
};

export default class HTML extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      htmlAttributes,
      headComponents,
      bodyAttributes,
      preBodyComponents,
      body,
      postBodyComponents
    } = this.props;

    return (
      <html {...htmlAttributes}>
        <head>
          <meta charSet='utf-8'/>
          <meta httpEquiv='x-ua-compatible' content='ie=edge'/>
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'/>
          {headComponents}
        </head>
        <body {...bodyAttributes}>
          {preBodyComponents}
          <noscript key='noscript' id='gatsby-noscript'>This app works best with JavaScript enabled.</noscript>
          <div key='body' id='___gatsby' dangerouslySetInnerHTML={{ __html: body }}/>
          {postBodyComponents}
          <script src='/js/jquery.min.js'/>
          <script src='/js/jquery-migrate-3.0.1.min.js'/>
          <script src='/js/popper.min.js'/>
          <script src='/js/bootstrap.min.js'/>
          <script src='/js/jquery.easing.1.3.js'/>
          <script src='/js/jquery.waypoints.min.js'/>
          <script src='/js/jquery.stellar.min.js'/>
          <script src='/js/owl.carousel.min.js'/>
          <script src='/js/jquery.magnific-popup.min.js'/>
          <script src='/js/aos.js'/>
          <script src='/js/jquery.animateNumber.min.js'/>
          <script src='/js/bootstrap-datepicker.js'/>
          <script src='/js/jquery.timepicker.min.js'/>
          <script src='/js/scrollax.min.js'/>
          <script src='/js/main.js'/>
        </body>
      </html>
    );
  }
}
