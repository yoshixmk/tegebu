import React from 'react';
import {Event} from '../type/Event';
import {TegeEvent} from './TegeEvent';

type Props = {
  events: Array<Event>;
};
type State = {
};

export class TegeEvents extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      events
    } = this.props;

    return (
      <section className='ftco-section'>
        <div className='container'>
          <div className='row justify-content-center mb-5'>
            <div className='col-md-7 heading-section text-center ftco-animate'>
              <span className='subheading'>
                <i className='db-left'/>Read Articles<i className='db-right'/>
              </span>
              <h2 className='mb-3'>Recent Events</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
          <div className='row d-flex'>
            {events.map<React.ReactElement>((event: Event): React.ReactElement => {
              const {
                thumbnail,
                year,
                month,
                day,
                eventName,
                description
              } = event;

              return (
                <TegeEvent
                  thumbnail={thumbnail}
                  year={year}
                  month={month}
                  day={day}
                  eventName={eventName}
                  description={description}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
