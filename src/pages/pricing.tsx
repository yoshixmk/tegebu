import { graphql } from 'gatsby';
import React from 'react';

import { Footer } from '../layout/Footer';
import { Header } from '../layout/Header';
import { Hero } from '../layout/Hero';
import { JS } from '../layout/JS';
import { Loader } from '../layout/Loader';
import { Nav } from '../layout/Nav';
import { TegeAd } from '../layout/TegeAd';
import { Page } from '../type/Page';
import { Slogans } from '../type/Slogans';

type Node = Readonly<{
  node: Readonly<{
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

export class Pricing extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      data: {
        allConfigYaml: {
          edges: [
            {
              node: {
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
          page={Page.PRICING}
        />
        <Hero
          jumbo='Pricing'
          q='あなたのための、とっておき価格。'
        />
        <TegeAd/>
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

export default Pricing;
