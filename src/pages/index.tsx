import React from 'react';
import {Header} from '../layout/Header';
import {Nav} from '../layout/Nav';
import {IndexHero} from '../layout/IndexHero';
import {Slogan} from '../layout/Slogan';
import {TegeThumbs} from '../layout/TegeThumbs';
import {TegeHighlight} from '../type/TegeHighlight';
import {Link} from 'gatsby';

type Props = {
  // salutation: string;
};
type State = {
};

// TODO to yml file
const thumbs: Array<TegeHighlight> = [
  {
    tegename: '目撃者たちの夜',
    tegedescription: 'まったく新しいロール決めの、正体隠匿ゲーム！',
    tegeinspiration: '目撃された殺人鬼はどう動くのか。人狼並みの議論が楽しめます'
  },
  {
    tegename: 'ふくろと金貨',
    tegedescription: 'バレないように金貨を奪え！',
    tegeinspiration: '相手を出し抜いたり、宝石で騙したりする戦略ゲーム'
  },
  {
    tegename: 'Marrakech',
    tegedescription: 'Marrakechとはモロッコの都市の名前で、ついにボードゲームになりました。',
    tegeinspiration: '敵の絨毯を邪魔しつつ、自分の絨毯を広げよう！'
  }
];

export class Index extends React.Component<Props, State> {

  public render(): React.ReactElement {
    return (
      <div>
        <Header/>
        <Nav/>
        <IndexHero/>
        <Slogan />
        <TegeThumbs
          hightlights={thumbs}
        />
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
