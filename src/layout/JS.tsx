import React from 'react';

import { Script } from './Script';

type Props = Readonly<{}>;
type State = Readonly<{}>;

export class JS extends React.Component<Props, State> {

  public render(): React.ReactElement | null {
    if (process.env.NODE_ENV === 'production') {
      return null;
    }

    return (
      <div>
        <Script
          src='js/jquery.min.js'
        />
        <Script
          src='js/jquery-migrate-3.0.1.min.js'
        />
        <Script
          src='js/popper.min.js'
        />
        <Script
          src='js/bootstrap.min.js'
        />
        <Script
          src='js/jquery.easing.1.3.js'
        />
        <Script
          src='js/jquery.waypoints.min.js'
        />
        <Script
          src='js/jquery.stellar.min.js'
        />
        <Script
          src='js/owl.carousel.min.js'
        />
        <Script
          src='js/jquery.magnific-popup.min.js'
        />
        <Script
          src='js/aos.js'
        />
        <Script
          src='js/jquery.animateNumber.min.js'
        />
        <Script
          src='js/bootstrap-datepicker.js'
        />
        <Script
          src='js/jquery.timepicker.min.js'
        />
        <Script
          src='js/scrollax.min.js'
        />
        <Script
          src='js/main.js'
        />
      </div>
    );
  }
}
