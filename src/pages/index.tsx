import React from 'react';
import Link from 'gatsby-link';
import {Header} from '../layout/Header';
import {Nav} from '../layout/Nav';
import {IndexHero} from '../layout/IndexHero';
import {Slogan} from '../layout/Slogan';

type Props = {
  // salutation: string;
};
type State = {
};

export class Index extends React.Component<Props, State> {

  public render(): React.ReactElement {
    return (
      <div>
        <Header/>
        <Nav/>
        <IndexHero/>
        <Slogan />
        <h1>Hi people</h1>
        <p>
          Welcome to your new{' '}
          <strong>our web</strong> site.
        </p>
        <p>Now go build something great.</p>
        <Link to='/about'>about us</Link>
      </div>
    );
  }
}

// export const pageQuery = graphql`
// query {
//   allLettersYaml {
//     edges {
//       node {
//         salutation
//       }
//     }
//   }
// }
// `;
//
export default Index;
