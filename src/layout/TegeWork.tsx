import React from 'react';
import {Work} from '../type/Work';
import {Link} from 'gatsby';

type Props = Work;
type State = {
};

export class TegeWork extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      work
    } = this.props;

    return (
      <div className='col-md-3 ftco-animate'>
        <Link to='/gallery'className='gallery img d-flex align-items-center' style={{
          backgroundImage: `url(${work})`
        }}>
          <div className='icon mb-4 d-flex align-items-center justify-content-center'>
            <span className='icon-search'/>
          </div>
        </Link>
      </div>
    );
  }
}
