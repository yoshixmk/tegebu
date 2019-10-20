import React from 'react';
import {Footer} from '../layout/Footer';
import {Loader} from '../layout/Loader';
import {Header} from '../layout/Header';
import {Nav} from '../layout/Nav';
import {Hero} from '../layout/Hero';
import {Tege} from '../type/Tege';
import {TegeIntroductions} from '../layout/TegeIntroductions';
import {Slogans} from '../type/Slogans';
import {Page} from '../type/Page';

type Node = {
  node: {
    teges: Array<Tege>;
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
