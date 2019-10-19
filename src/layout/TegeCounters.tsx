import React from 'react';
import {Count} from '../type/Count';
import {TegeCounter} from './TegeCounter';

type Props = {
  counts: Array<Count>;
};
type State = {
};

export class TegeCounters extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      counts
    } = this.props;

    return (
      <section className='ftco-counter ftco-bg-dark img' id='section-counter' style={{
        backgroundImage: 'url(images/bg_2.jpg);'
      }} data-stellar-background-ratio='0.5'>
        <div className='overlay'/>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-10'>
              <div className='row'>
                {counts.map<React.ReactElement>((count: Count): React.ReactElement => {
                  const {
                    start,
                    end,
                    about
                  } = count;

                  return (
                    <TegeCounter
                      start={start}
                      end={end}
                      about={about}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
