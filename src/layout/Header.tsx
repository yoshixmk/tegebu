import React from 'react';
import {Helmet} from 'react-helmet';

type Props = {
};
type State = {
};

export class Header extends React.Component<Props, State> {

  public render(): React.ReactElement {
    return (
      <div className='application'>
        <Helmet
          title='Tegebu - Tabletop Games Club'
          meta={[
            {
              charSet: 'utf-8'
            },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            },
            {
              name: 'msapplication-TileColor',
              content: '#da532c'
            },
            {
              name: 'theme-color',
              content: '#ffffff'
            }
          ]}
          link={[
            {
              href: 'https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900',
              rel: 'stylesheet'
            },
            {
              href: '/css/open-iconic-bootstrap.min.css',
              rel: 'stylesheet'
            },
            {
              href: '/css/animate.css',
              rel: 'stylesheet'
            },
            {
              href: '/css/owl.carousel.min.css',
              rel: 'stylesheet'
            },
            {
              href: '/css/owl.theme.default.min.css',
              rel: 'stylesheet'
            },
            {
              href: '/css/magnific-popup.css',
              rel: 'stylesheet'
            },
            {
              href: '/css/aos.css',
              rel: 'stylesheet'
            },
            {
              href: '/css/ionicons.min.css',
              rel: 'stylesheet'
            },
            {
              href: '/css/bootstrap-datepicker.css',
              rel: 'stylesheet'
            },
            {
              href: '/css/jquery.timepicker.css',
              rel: 'stylesheet'
            },
            {
              href: '/css/flaticon.css',
              rel: 'stylesheet'
            },
            {
              href: '/css/icomoon.css',
              rel: 'stylesheet'
            },
            {
              href: '/css/style.css',
              rel: 'stylesheet'
            },
            {
              href: '/favicons/apple-touch-icon.png',
              rel: 'apple-touch-icon',
              sizes: '180x180'
            },
            {
              href: '/favicons/favicon-32x32.png',
              rel: 'icon',
              sizes: '32x32',
              type: 'image/png'
            },
            {
              href: '/favicons/favicon-16x16.png',
              rel: 'icon',
              sizes: '16x16',
              type: 'image/png'
            },
            {
              href: '/favicons/site.webmanifest',
              rel: 'manifest'
            },
            {
              href: '/favicons/safari-pinned-tab.svg',
              rel: 'mask-icon',
              color: '#5bbad5'
            }
          ]}
          script={[
            {
              async: false,
              type: 'application/javascript',
              src: '/js/jquery.min.js'
            },
            {
              async: false,
              type: 'application/javascript',
              src: '/js/jquery-migrate-3.0.1.min.js'
            },
            {
              async: false,
              type: 'application/javascript',
              src: '/js/popper.min.js'
            },
            {
              async: false,
              type: 'application/javascript',
              src: '/js/bootstrap.min.js'
            },
            {
              async: false,
              type: 'application/javascript',
              src: '/js/jquery.easing.1.3.js'
            },
            {
              async: false,
              type: 'application/javascript',
              src: '/js/jquery.waypoints.min.js'
            },
            {
              async: false,
              type: 'application/javascript',
              src: '/js/jquery.stellar.min.js'
            },
            {
              async: false,
              type: 'application/javascript',
              src: '/js/owl.carousel.min.js'
            },
            {
              async: false,
              type: 'application/javascript',
              src: '/js/jquery.magnific-popup.min.js'
            },
            {
              async: false,
              type: 'application/javascript',
              src: '/js/aos.js'
            },
            {
              async: false,
              type: 'application/javascript',
              src: '/js/jquery.animateNumber.min.js'
            },
            {
              async: false,
              type: 'application/javascript',
              src: '/js/bootstrap-datepicker.js'
            },
            {
              async: false,
              type: 'application/javascript',
              src: '/js/jquery.timepicker.min.js'
            },
            {
              async: false,
              type: 'application/javascript',
              src: '/js/scrollax.min.js'
            },
            {
              async: false,
              type: 'application/javascript',
              src: '/js/main.js'
            }
          ]}
        />
      </div>
    );
  }
}
