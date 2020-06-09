import React from 'react';

import { Work } from '../type/Work';

type Props = Work;
type State = Readonly<{}>;

export class TegeWork extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      work
    } = this.props;

    return (
      <div className='col-md-3 ftco-animate'>
        <div className='gallery img d-flex align-items-center' style={{
          backgroundImage: `url(/images/${work})`
        }}>
          <div className='icon mb-4 d-flex align-items-center justify-content-center'>
            <span className='icon-search'/>
          </div>
        </div>
      </div>
    );
  }
}
