import React from 'react';
import {Footer} from '../layout/Footer';
import {Loader} from '../layout/Loader';
import {Header} from '../layout/Header';
import {Nav} from '../layout/Nav';
import {Hero} from '../layout/Hero';
import {TegeAd} from '../layout/TegeAd';
import {JS} from '../layout/JS';
import {Slogans} from '../type/Slogans';
import {Page} from '../type/Page';

type Node = {
  node: {
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

export default Pricing;
