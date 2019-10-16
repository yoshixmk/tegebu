import React from 'react';
import {Helmet} from 'react-helmet';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-149348992-1');
ReactGA.pageview(window.location.pathname + window.location.search);

type Props = {
};
type State = {
};

export class Application extends React.Component<Props, State> {

  public render(): React.ReactElement {
    return (
      <div className='application'>
        <Helmet>
          <title>Tegebu - Tabletop Games Club</title>

          <meta charSet='utf-8'/>
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'/>

          <link href='https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900' rel='stylesheet'/>

          <link rel='stylesheet' href='css/open-iconic-bootstrap.min.css'/>
          <link rel='stylesheet' href='css/animate.css'/>

          <link rel='stylesheet' href='css/owl.carousel.min.css'/>
          <link rel='stylesheet' href='css/owl.theme.default.min.css'/>
          <link rel='stylesheet' href='css/magnific-popup.css'/>

          <link rel='stylesheet' href='css/aos.css'/>

          <link rel='stylesheet' href='css/ionicons.min.css'/>

          <link rel='stylesheet' href='css/bootstrap-datepicker.css'/>
          <link rel='stylesheet' href='css/jquery.timepicker.css'/>


          <link rel='stylesheet' href='css/flaticon.css'/>
          <link rel='stylesheet' href='css/icomoon.css'/>
          <link rel='stylesheet' href='css/style.css'/>

          <link rel='apple-touch-icon' sizes='180x180' href='./favicons/apple-touch-icon.png'/>
          <link rel='icon' type='image/png' sizes='32x32' href='./favicons/favicon-32x32.png'/>
          <link rel='icon' type='image/png' sizes='16x16' href='./favicons/favicon-16x16.png'/>
          <link rel='manifest' href='./favicons/site.webmanifest'/>
          <link rel='mask-icon' href='./favicons/safari-pinned-tab.svg' color='#5bbad5'/>
          <meta name='msapplication-TileColor' content='#da532c'/>
          <meta name='theme-color' content='#ffffff'/>
        </Helmet>
      </div>
    );
  }
}
