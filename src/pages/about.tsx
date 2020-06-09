import { graphql } from 'gatsby';
import React from 'react';

import { Footer } from '../layout/Footer';
import { Header } from '../layout/Header';
import { Hero } from '../layout/Hero';
import { JS } from '../layout/JS';
import { Loader } from '../layout/Loader';
import { Nav } from '../layout/Nav';
import { TegeBio } from '../layout/TegeBio';
import { TegeCounters } from '../layout/TegeCounters';
import { TegeGallery } from '../layout/TegeGallery';
import { TegeTestimonies } from '../layout/TegeTestimonies';
import { Counts } from '../type/Count';
import { Page } from '../type/Page';
import { Slogans } from '../type/Slogans';
import { Words } from '../type/Word';
import { Works } from '../type/Work';

type Node = Readonly<{
  node: Readonly<{
    counts: Counts;
    words: Words;
    works: Works;
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
