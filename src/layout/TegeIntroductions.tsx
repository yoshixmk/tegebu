import React from 'react';
import {Tege, Teges} from '../type/Tege';
import {TegeIntroduction} from './TegeIntroduction';

type Props = {
  teges: Teges;
};
type State = {
};

export class TegeIntroductions extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      teges
    } = this.props;

    return (
      <section id='game-contents' className='ftco-section'>
        <div className='container'>
          <div className='row justify-content-center mb-5'>
            <div className='col-md-7 heading-section text-center ftco-animate'>
              <span className='subheading'>
                <i className='db-left'/>Tabletop games<i className='db-right'/>
              </span>
              <h2 className='mb-3'>テーブルゲーム一覧</h2>
              <p>てげ部が用意している、テーブルゲームをまとめてみました</p>
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='col-lg-12 d-flex'>
              <div className='coach d-sm-flex align-items-stretch'>
                <div className='img col-lg-4' style={{
                  backgroundImage: 'url(/images/trainer-1.jpg)'
                }}/>
                <div className='text py-4 px-5 ftco-animate col-lg-8'>
                  <h5><a href='#'>1. てげ名</a></h5>
                  <p>てげの名前</p>
                  <h5><a href='#'>2. てげ分別</a></h5>
                  <p>てげ部員による、てげの直感的な分別</p>
                  <h5><a href='#'>3. てげ軽さ</a></h5>
                  <p>インストール(内容の把握)が容易だと「軽い」難解だと「重い」</p>
                  <h5><a href='#'>4. てげ時間</a></h5>
                  <p>1回てげを終えるまでにかかるおおよその時間。単位は分</p>
                  <h5><a href='#'>5. てげ人数</a></h5>
                  <p>そのてげで遊べる人数</p>
                  <h5><a href='#'>6. てげ適齢期</a></h5>
                  <p>てげを理解できて遊べるであろう年齢。単位は歳</p>
                  <h5><a href='#'>7. てげ概要</a></h5>
                  <p>てげ部員による、端的なてげの説明</p>
                  <h5><a href='#'>8. てげ感想</a></h5>
                  <p>てげ部員による、投げやりなてげの感想</p>
                </div>
              </div>
            </div>
            {teges.map<React.ReactElement>((tege: Tege, index: number): React.ReactElement => {
              const {
                tegename,
                tegegenre,
                tegeeasiness,
                tegetime,
                tegepersons,
                tegeage,
                tegedescription,
                tegeimpression,
                tegeimage
              } = tege;

              return (
                <TegeIntroduction
                  key={tegename}
                  tegename={tegename}
                  tegegenre={tegegenre}
                  tegeeasiness={tegeeasiness}
                  tegetime={tegetime}
                  tegepersons={tegepersons}
                  tegeage={tegeage}
                  tegedescription={tegedescription}
                  tegeimpression={tegeimpression}
                  tegeimage={tegeimage}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
