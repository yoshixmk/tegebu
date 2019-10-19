import React from 'react';
import {Header} from '../layout/Header';
import {Nav} from '../layout/Nav';
import {IndexHero} from '../layout/IndexHero';
import {Slogan} from '../layout/Slogan';
import {TegeThumbs} from '../layout/TegeThumbs';
import {Highlight} from '../type/Highlight';
import {Link} from 'gatsby';
import {Rule} from '../type/Rule';
import {TegePromises} from '../layout/TegePromises';
import {Count} from '../type/Count';
import {TegeCounters} from '../layout/TegeCounters';
import {Member} from '../type/Member';
import {TegeMembers} from '../layout/TegeMembers';
import {Word} from '../type/Word';
import {Event} from '../type/Event';
import {TegeTestimonies} from '../layout/TegeTestimonies';
import {TegeEvents} from '../layout/TegeEvents';
import {TegeContact} from '../layout/TegeContact';
import {TegeGallery} from '../layout/TegeGallery';
import {Work} from '../type/Work';

type Props = {
  // salutation: string;
};
type State = {
};

// TODO to yml file
const highlights: Array<Highlight> = [
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
const rules: Array<Rule> = [
  {
    tegeicon: 'flaticon-gym',
    tegephrase: '笑顔',
    tegeactivity: 'ゲームは楽しくなくては！自然と笑みがこぼれます'
  },
  {
    tegeicon: 'flaticon-woman',
    tegephrase: '交流',
    tegeactivity: '初心者から経験者まで大歓迎！リアルなイベントが中心です'
  },
  {
    tegeicon: 'flaticon-workout',
    tegephrase: '多様',
    tegeactivity: '仲間とボードゲームでつながる集まりです'
  },
  {
    tegeicon: 'flaticon-meditation',
    tegephrase: '共有',
    tegeactivity: '今どきのテーブルゲームのトピックが手に入ります'
  },
  {
    tegeicon: 'flaticon-stationary-bike',
    tegephrase: '口コミ',
    tegeactivity: '一緒にテーブルゲームしてくれる人、興味がある人、募集！'
  }
];
const counts: Array<Count> = [
  {
    start: 0,
    end: 328,
    about: 'Members'
  },
  {
    start: 0,
    end: 264,
    about: 'Have Fun'
  },
  {
    start: 0,
    end: 176,
    about: 'Working Hours'
  },
  {
    start: 0,
    end: 120,
    about: 'Tabletop Games'
  }
];
const members: Array<Member> = [
  {
    subheading: 'Head Coach',
    memberName: 'JINRO',
    memberImage: 'images/trainer-1.jpg',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a',
    position: 'left'
  },
  {
    subheading: 'Lead Organizer',
    memberName: 'KARIUDO',
    memberImage: 'images/trainer-2.jpg',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    position: 'left'
  },
  {
    subheading: 'Lead Organizer',
    memberName: 'YOGENSHA',
    memberImage: 'images/trainer-3.jpg',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a',
    position: 'right'
  },
  {
    subheading: 'Organizer',
    memberName: 'URANAISHI',
    memberImage: 'images/trainer-4.jpg',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a',
    position: 'right'
  },
];
const words: Array<Word> = [
  {
    headshot: 'images/person_1.jpg',
    word: '賽は投げられた。',
    by: 'ガイウス・ユリウス・カエサル',
    position: '特別顧問'
  },
  {
    headshot: 'images/person_2.jpg',
    word: '神はサイコロを降らない。',
    by: 'アルベルト・アインシュタイン',
    position: '偉大なる先輩'
  }
];
const events: Array<Event> = [
  {
    thumbnail: 'images/image_1.jpg',
    day: 28,
    month: 9,
    year: 2019,
    eventName: 'Crossfit Harder Workout',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
  },
  {
    thumbnail: 'images/image_1.jpg',
    day: 28,
    month: 9,
    year: 2019,
    eventName: 'Crossfit Harder Workout',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
  },
  {
    thumbnail: 'images/image_1.jpg',
    day: 28,
    month: 9,
    year: 2019,
    eventName: 'Crossfit Harder Workout',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
  },
  {
    thumbnail: 'images/image_2.jpg',
    day: 1,
    month: 9,
    year: 2019,
    eventName: 'Crossfit Harder Workout',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
  },
  {
    thumbnail: 'images/image_3.jpg',
    day: 20,
    month: 7,
    year: 2019,
    eventName: 'Crossfit Harder Workout',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
  }
];
const works: Array<Work> = [
  {
    work: 'images/gallery-1.jpg',
  },
  {
    work: 'images/gallery-2.jpg',
  },
  {
    work: 'images/gallery-3.jpg',
  },
  {
    work: 'images/gallery-4.jpg',
  }
];

export class Index extends React.Component<Props, State> {

  public render(): React.ReactElement {
    return (
      <div>
        <Header/>
        <Nav/>
        <IndexHero/>
        <Slogan/>
        <TegeThumbs
          highlights={highlights}
        />
        <TegePromises
          rules={rules}
        />
        <TegeCounters
          counts={counts}
        />
        <TegeMembers
          members={members}
        />
        <TegeTestimonies
          words={words}
        />
        <TegeEvents
          events={events}
        />
        <TegeContact/>
        <TegeGallery
          works={works}
        />
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
