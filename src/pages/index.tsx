import React from 'react';
import Link from 'gatsby-link';

type Props = {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
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
          <strong>{this.props.data.site.siteMetadata.title}</strong> site.
        </p>
        <p>Now go build something great.</p>
        <Link to='/about'>about us</Link>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
