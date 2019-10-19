import React from 'react';
import {Rule} from '../type/Rule';

type Props = Rule;
type State = {
};

export class TegePromise extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      tegeicon,
      tegephrase,
      tegeactivity
    } = this.props;

    return (
      <div className='program d-flex ftco-animate'>
        <div className='icon d-flex mr-lg-3 justify-content-center align-items-center order-lg-last'>
          <span className={tegeicon}/>
        </div>
        <div className='text ml-5 mr-lg-4 text-lg-right'>
          <h3>{tegephrase}</h3>
          <p>{tegeactivity}</p>
        </div>
      </div>
    );
  }
}
