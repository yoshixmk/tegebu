import React from 'react';
import Link from 'gatsby-link';

type Props = {
  // salutation: string;
};
type State = {
};

export class Index extends React.Component<Props, State> {

  public render(): React.ReactElement {
    return (
      <div>
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
