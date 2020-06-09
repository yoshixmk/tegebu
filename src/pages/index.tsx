import { graphql } from 'gatsby';
import React from 'react';

import { Footer } from '../layout/Footer';
import { Header } from '../layout/Header';
import { IndexHero } from '../layout/IndexHero';
import { JS } from '../layout/JS';
import { Loader } from '../layout/Loader';
import { Nav } from '../layout/Nav';
import { TegeContact } from '../layout/TegeContact';
import { TegeCounters } from '../layout/TegeCounters';
import { TegeEvents } from '../layout/TegeEvents';
import { TegeGallery } from '../layout/TegeGallery';
import { TegeMembers } from '../layout/TegeMembers';
import { TegePromises } from '../layout/TegePromises';
import { TegeSlogan } from '../layout/TegeSlogan';
import { TegeTestimonies } from '../layout/TegeTestimonies';
import { TegeThumbs } from '../layout/TegeThumbs';
import { Counts } from '../type/Count';
import { Events } from '../type/Event';
import { Highlights } from '../type/Highlight';
import { Members } from '../type/Member';
import { Page } from '../type/Page';
import { Rules } from '../type/Rule';
import { Slogans } from '../type/Slogans';
import { Words } from '../type/Word';
import { Works } from '../type/Work';

type Node = Readonly<{
  node: Readonly<{
    counts: Counts;
    events: Events;
    highlights: Highlights;
    members: Members;
    rules: Rules;
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

export class Index extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      data: {
        allConfigYaml: {
          edges: [
            {
              node: {
                counts,
                events,
                highlights,
                members,
                rules,
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
          page={Page.INDEX}
        />
        <IndexHero/>
        <TegeSlogan
          slogans={slogans}
        />
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
        events {
          thumbnail
          day
          month
          year
          eventName
          description
        }
        highlights {
          tegename
          tegedescription
          tegeinspiration
          tegeimage
        }
        members {
          subheading
          memberName
          memberImage
          description
        }
        rules {
          tegeicon
          tegephrase
          tegeactivity
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

export default Index;
