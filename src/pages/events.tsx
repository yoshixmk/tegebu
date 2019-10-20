import React from 'react';
import {Footer} from '../layout/Footer';
import {Loader} from '../layout/Loader';
import {Header} from '../layout/Header';
import {Nav} from '../layout/Nav';
import {Hero} from '../layout/Hero';
import {TegePromises} from '../layout/TegePromises';
import {Rule} from '../type/Rule';
import {JS} from '../layout/JS';
import {Slogans} from '../type/Slogans';
import {Page} from '../type/Page';

type Node = {
  node: {
    rules: Array<Rule>;
    slogans: Slogans;
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
                rules,
                slogans
              }
            }
          ]
        }
      }
    } = this.props;

    return (
      <div>
        <Header/>
        <Nav
          page={Page.EVENTS}
        />
        <Hero
          jumbo='Events'
          q='Events'
        />
        <TegePromises
          rules={rules}
        />
        <Footer
          slogans={slogans}
        />
        <Loader/>
        <JS/>
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
        slogans {
          ja
          en
          fr
          es
        }
      }
    }
  }
}
`;

export default Events;
