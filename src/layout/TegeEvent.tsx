import React from 'react';
import {Event} from '../type/Event';

type Props = Event;
type State = {
};

export class TegeEvent extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      thumbnail,
      year,
      month,
      day,
      eventName,
      description
    } = this.props;

    return (
      <div className='col-lg-4 d-flex ftco-animate'>
        <div className='blog-entry align-self-stretch'>
          <a href='/events' className='block-20' style={{
            backgroundImage: `url(${thumbnail})`
          }}>
          </a>
          <div className='text py-4 d-flex'>
            <div className='meta text-center'>
              <span className='day'>{day.toString().padStart(2, '0')}</span>
              <span className='mos'>{month.toString().padStart(2, '0')}</span>
              <span className='yr'>{year}</span>
            </div>
            <div className='desc'>
              <h3 className='heading mt-2'><a href='#'>{eventName}</a></h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
