import React from 'react';
import {Word} from '../type/Word';
import {Work} from '../type/Work';
import {TegeTestimonies} from '../layout/TegeTestimonies';
import {TegeGallery} from '../layout/TegeGallery';
import {Footer} from '../layout/Footer';
import {Loader} from '../layout/Loader';
import {Header} from '../layout/Header';
import {Nav} from '../layout/Nav';
import {Hero} from '../layout/Hero';
import {Count} from '../type/Count';
import {TegeCounters} from '../layout/TegeCounters';
import {TegeBio} from '../layout/TegeBio';
import {Slogans} from '../type/Slogans';
import {Page} from '../type/Page';
import {JS} from '../layout/JS';

type Node = {
  node: {
    counts: Array<Count>;
    words: Array<Word>;
    works: Array<Work>;
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

export class About extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      data: {
        allConfigYaml: {
          edges: [
            {
              node: {
                counts,
                words,
                works,
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
          page={Page.ABOUT}
        />
        <Hero
          jumbo='About us'
          q='About us'
        />
        <TegeCounters
          counts={counts}
        />
        <TegeBio/>
        <TegeTestimonies
          words={words}
        />
        <TegeGallery
          works={works}
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
        counts {
          start
          end
          about
        }
        words {
          headshot
          word
          by
          position
        }
        works {
          work
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

export default About;
