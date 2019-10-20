import React from 'react';
import {Slogans} from '../type/Slogans';

type Props = {
  slogans: Slogans;
};
type State = {
};

export class TegeSlogan extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      slogans
    } = this.props;

    return (
      <div className='row justify-content-center mb-5'>
        <div className='col-md-10 heading-section text-center ftco-animate'>
          <span className='subheading'>
            <i className='db-left'/>Who are we?<i className='db-right'/>
          </span>
          <h2 className='mb-3'>{slogans.ja}</h2>
          <p>{slogans.en}</p>
          <p>{slogans.fr}</p>
          <p>{slogans.es}</p>
        </div>
      </div>
    );
  }
}
