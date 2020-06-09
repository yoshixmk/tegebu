import { graphql } from 'gatsby';
import React from 'react';

import { Footer } from '../layout/Footer';
import { Header } from '../layout/Header';
import { Hero } from '../layout/Hero';
import { JS } from '../layout/JS';
import { Loader } from '../layout/Loader';
import { Nav } from '../layout/Nav';
import { TegeIntroductions } from '../layout/TegeIntroductions';
import { Page } from '../type/Page';
import { Slogans } from '../type/Slogans';
import { Teges } from '../type/Tege';

type Node = Readonly<{
  node: Readonly<{
    teges: Teges;
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

export class TabletopGames extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      data: {
        allConfigYaml: {
          edges: [
            {
              node: {
                teges,
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
          page={Page.TABLETOP_GAMES}
        />
        <Hero
          jumbo='Tabletop games'
          q='テーブルゲームの一覧を見る'
        />
        <TegeIntroductions
          teges={teges}
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
        teges {
          tegename
          tegegenre
          tegeeasiness
          tegetime
          tegepersons
          tegeage
          tegedescription
          tegeimpression
          tegeimage
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

export default TabletopGames;
