import React from 'react';
import Link from 'gatsby-link';

type Props = {
};
type State = {
};

export class About extends React.Component<Props, State> {

  public render(): React.ReactElement {
    return (
      <div>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to='/'>Go back to the homepage</Link>
      </div>
    );
  }
}

export default About;
