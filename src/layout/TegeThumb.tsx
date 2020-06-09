import React from 'react';

import { Highlight } from '../type/Highlight';

type Props = Highlight;
type State = Readonly<{}>;

export class TegeThumb extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      tegename,
      tegedescription,
      tegeinspiration,
      tegeimage
    } = this.props;

    return (
      <div className='col-md-4'>
        <div className='pricing-wrap ftco-animate img' style={{
          backgroundImage: `url(/images/teges/${tegeimage})`
        }}>
          <div className='title p-4'>
            <h3 style={{
              backgroundColor: 'black'
            }}>{tegename}</h3>
            <span style={{
              backgroundColor: 'black'
            }}>{tegedescription}</span>
          </div>
          <div className='text p-4 d-flex align-items-end'>
            <a href='#' className='btn-custom px-4 py-2'>遊んだ記録を見る</a>
            <div>
              <span className='price'>small amount of money</span>
              <h3><a href='#'>{tegename}</a></h3>
              <p>{tegeinspiration}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
