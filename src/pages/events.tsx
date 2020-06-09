import { graphql } from 'gatsby';
import React from 'react';

import { Footer } from '../layout/Footer';
import { Header } from '../layout/Header';
import { Hero } from '../layout/Hero';
import { JS } from '../layout/JS';
import { Loader } from '../layout/Loader';
import { Nav } from '../layout/Nav';
import { TegePromises } from '../layout/TegePromises';
import { Page } from '../type/Page';
import { Rules } from '../type/Rule';
import { Slogans } from '../type/Slogans';

type Node = Readonly<{
  node: Readonly<{
    rules: Rules;
    slogans: Slogans;
  }>;
}>;

type Props = Readonly<{
  data: Readonly<{
    allConfigYaml: Readonly<{
      edges: Array<Node>;
    }>;
  }>;
}>;
type State = Readonly<{}>;

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
        <JS/>
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
        slogans {
          ja
          en
          fr
          es
          zh
        }
      }
    }
  }
}
`;

export default Events;
