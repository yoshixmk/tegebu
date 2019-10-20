import React from 'react';
import {Footer} from '../layout/Footer';
import {Loader} from '../layout/Loader';
import {Header} from '../layout/Header';
import {Nav} from '../layout/Nav';
import {Hero} from '../layout/Hero';
import {Tege} from '../type/Tege';
import {TegeIntroductions} from '../layout/TegeIntroductions';
import {JS} from '../layout/JS';

type Node = {
  node: {
    teges: Array<Tege>;
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
                teges
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
          jumbo='Tabletop games'
          q='テーブルゲームの一覧を見る'
        />
        <TegeIntroductions
          teges={teges}
        />
        <Footer/>
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
      }
    }
  }
}
`;

export default TabletopGames;
