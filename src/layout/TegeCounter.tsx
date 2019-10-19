import React from 'react';
import {TegeScouter} from '../type/TegeScouter';

type Props = TegeScouter;
type State = {
};

export class TegeCounter extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      start,
      end,
      about
    } = this.props;

    return (
      <div className='col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate'>
        <div className='block-18 text-center'>
          <div className='text'>
            <strong className='number' data-number={end}>{start}</strong>
            <span>{about}</span>
          </div>
        </div>
      </div>
    );
  }
}
