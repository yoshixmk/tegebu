import React from 'react';
import {Footer} from '../layout/Footer';
import {Loader} from '../layout/Loader';
import {Header} from '../layout/Header';
import {Nav} from '../layout/Nav';
import {Hero} from '../layout/Hero';
import {TegePromises} from '../layout/TegePromises';
import {Rule} from '../type/Rule';

type Node = {
  node: {
    rules: Array<Rule>;
  };
};

type Props = {
  data: {
    allConfigYaml: {
      edges: Array<Node>;
    };
  };
};
type State = {
};

export class Events extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      data: {
        allConfigYaml: {
          edges: [
            {
              node: {
                rules
              }
            }
          ]
        }
      }
    } = this.props;

    return (
      <div>
        <Header/>
        <Nav/>
        <Hero
          jumbo='Events'
          q='Events'
        />
        <TegePromises
          rules={rules}
        />
        <Footer/>
        <Loader/>
      </div>
    );
  }
}

export const pageQuery = graphql`
query {
  allConfigYaml {
    edges {
      node {
        rules {
          tegeicon
          tegephrase
          tegeactivity
        }
      }
    }
  }
}
`;

export default Events;
