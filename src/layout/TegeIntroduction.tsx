import React from 'react';
import {Tege} from '../type/Tege';

type Props = Tege & {
  index: number;
};
type State = {
};

export class TegeIntroduction extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      tegename,
      tegegenre,
      tegeeasiness,
      tegetime,
      tegepersons,
      tegeage,
      tegedescription,
      tegeimpression,
      tegeimage,
      index
    } = this.props;

    if (index % 2 === 0) {
      return (
        <div className='coach d-sm-flex align-items-stretch'>
          <div className='text py-4 px-5 ftco-animate col-lg-8'>
            <h5><a href='#'>1. てげ名</a></h5>
            <p>{tegename}</p>
            <h5><a href='#'>2. てげ分別</a></h5>
            <p>{tegegenre}</p>
            <h5><a href='#'>3. てげ軽さ</a></h5>
            <p>{tegeeasiness}</p>
            <h5><a href='#'>4. てげ時間</a></h5>
            <p>{tegetime} 分</p>
            <h5><a href='#'>5. てげ人数</a></h5>
            <p>{tegepersons}</p>
            <h5><a href='#'>6. てげ適齢期</a></h5>
            <p>{tegeage} 歳</p>
            <h5><a href='#'>7. てげ概要</a></h5>
            <p>{tegedescription}</p>
            <h5><a href='#'>8. てげ感想</a></h5>
            <p>{tegeimpression}</p>
          </div>
          <div className='img col-lg-4' style={{
            backgroundImage: `url(images/teges/${tegeimage})`
          }}/>
        </div>
      );
    }

    return (
      <div className='coach d-sm-flex align-items-stretch'>
        <div className='img col-lg-4' style={{
          backgroundImage: `url(images/teges/${tegeimage})`
        }}/>
        <div className='text py-4 px-5 ftco-animate col-lg-8'>
          <h5><a href='#'>1. てげ名</a></h5>
          <p>{tegename}</p>
          <h5><a href='#'>2. てげ分別</a></h5>
          <p>{tegegenre}</p>
          <h5><a href='#'>3. てげ軽さ</a></h5>
          <p>{tegeeasiness}</p>
          <h5><a href='#'>4. てげ時間</a></h5>
          <p>{tegetime} 分</p>
          <h5><a href='#'>5. てげ人数</a></h5>
          <p>{tegepersons}</p>
          <h5><a href='#'>6. てげ適齢期</a></h5>
          <p>{tegeage} 歳</p>
          <h5><a href='#'>7. てげ概要</a></h5>
          <p>{tegedescription}</p>
          <h5><a href='#'>8. てげ感想</a></h5>
          <p>{tegeimpression}</p>
        </div>
      </div>
    );
  }
}
