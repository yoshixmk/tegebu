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
        <Helmet>
          <title>Tegebu - Tabletop Games Club</title>
          <meta charSet='utf-8'/>
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'/>
          <meta name='msapplication-TileColor' content='#da532c'/>
          <meta name='theme-color' content='#ffffff'/>
          <link href='https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900' rel='stylesheet'/>
          <link href='css/open-iconic-bootstrap.min.css' rel='stylesheet'/>
          <link href='css/animate.css' rel='stylesheet'/>
          <link href='css/owl.carousel.min.css' rel='stylesheet'/>
          <link href='css/owl.theme.default.min.css' rel='stylesheet'/>
          <link href='css/magnific-popup.css' rel='stylesheet'/>
          <link href='css/aos.css' rel='stylesheet'/>
          <link href='css/ionicons.min.css' rel='stylesheet'/>
          <link href='css/bootstrap-datepicker.css' rel='stylesheet'/>
          <link href='css/jquery.timepicker.css' rel='stylesheet'/>
          <link href='css/flaticon.css' rel='stylesheet'/>
          <link href='css/icomoon.css' rel='stylesheet'/>
          <link href='css/style.css' rel='stylesheet'/>
          <link href='favicons/apple-touch-icon.png' rel='apple-touch-icon' sizes='180x180'/>
          <link href='favicons/favicon-32x32.png' rel='icon' sizes='32x32' type='image/png'/>
          <link href='favicons/favicon-16x16.png' rel='icon' sizes='16x16' type='image/png'/>
          <link href='favicons/site.webmanifest' rel='manifest'/>
          <link href='favicons/safari-pinned-tab.svg' rel='mask-icon' color='#5bbad5'/>
        </Helmet>
      </div>
    );
  }
}
