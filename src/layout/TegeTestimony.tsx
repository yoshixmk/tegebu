import React from 'react';

import { Word } from '../type/Word';

type Props = Word;
type State = Readonly<{}>;

export class TegeTestimony extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      headshot,
      word,
      by,
      position
    } = this.props;

    return (
      <div className='item'>
        <div className='testimony-wrap py-4 pb-5'>
          <div className='user-img mb-4' style={{
            backgroundImage: `url(/images/${headshot})`
          }}>
            <span className='quote d-flex align-items-center justify-content-center'>
              <i className='icon-quote-left'/>
            </span>
          </div>
          <div className='text text-center'>
            <p className='mb-4'>{word}</p>
            <p className='name'>{by}</p>
            <span className='position'>{position}</span>
          </div>
        </div>
      </div>
    );
  }
}
