import React from 'react';
import {Word} from '../type/Word';
import {Event} from '../type/Event';
import {Work} from '../type/Work';
import {TegeTestimonies} from '../layout/TegeTestimonies';
import {TegeGallery} from '../layout/TegeGallery';
import {Footer} from '../layout/Footer';
import {Loader} from '../layout/Loader';
import {JS} from '../layout/JS';
import {Header} from '../layout/Header';
import {Nav} from '../layout/Nav';
import {Hero} from '../layout/Hero';
import {Count} from '../type/Count';
import {TegeCounters} from '../layout/TegeCounters';
import {TegeIntroductin} from '../layout/TegeIntroductin';

type Props = {
};
type State = {
};

// TODO to yaml file
const counts: Array<Count> = [
  {
    start: 0,
    end: 5000,
    about: 'Happy Co-volunteers'
  },
  {
    start: 0,
    end: 4560,
    about: 'Perfect Bodies'
  },
  {
    start: 0,
    end: 570,
    about: 'Working Hours'
  },
  {
    start: 0,
    end: 120,
    about: 'Tabletop Games'
  }
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


export class About extends React.Component<Props, State> {

  public render(): React.ReactElement {
    return (
      <div>
        <Header/>
        <Nav/>
        <Hero
          jumbo='Events'
          q='Events'
        />
        <TegeCounters
          counts={counts}
        />
        <TegeIntroductin/>
        <TegeTestimonies
          words={words}
        />
        <TegeGallery
          works={works}
        />
        <Footer/>
        <Loader/>
        <JS/>
      </div>
    );
  }
}

export default About;
