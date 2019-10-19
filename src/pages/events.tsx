import React from 'react';
import {Footer} from '../layout/Footer';
import {Loader} from '../layout/Loader';
import {JS} from '../layout/JS';
import {Header} from '../layout/Header';
import {Nav} from '../layout/Nav';
import {Hero} from '../layout/Hero';
import {TegePromises} from '../layout/TegePromises';
import {Rule} from '../type/Rule';

type Props = {
};
type State = {
};

// TODO to yaml file
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


export class Events extends React.Component<Props, State> {

  public render(): React.ReactElement {
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
        <JS/>
      </div>
    );
  }
}

export default Events;
