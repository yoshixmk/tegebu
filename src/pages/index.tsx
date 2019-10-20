import React from 'react';
import {Header} from '../layout/Header';
import {Nav} from '../layout/Nav';
import {IndexHero} from '../layout/IndexHero';
import {TegeSlogan} from '../layout/TegeSlogan';
import {TegeThumbs} from '../layout/TegeThumbs';
import {Highlight} from '../type/Highlight';
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
import {Footer} from '../layout/Footer';
import {Loader} from '../layout/Loader';
import {Slogans} from '../type/Slogans';
import {Page} from '../type/Page';
import {JS} from '../layout/JS';

type Node = {
  node: {
    counts: Array<Count>;
    events: Array<Event>;
    highlights: Array<Highlight>;
    members: Array<Member>;
    rules: Array<Rule>;
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
          position
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