import React from 'react';

type Props = {
};
type State = {
};

export class TegeAd extends React.Component<Props, State> {

  public render(): React.ReactElement {
    return (
      <section className='ftco-section'>
        <div className='container'>
          <div className='row justify-content-center mb-5'>
            <div className='col-md-10 heading-section text-center ftco-animate'>
              <span className='subheading'>
                <i className='db-left'/>About Pricing<i className='db-right'/>
              </span>
              <h2 className='mb-3'><a id='kakaku'>参加費は少額。テーブルゲームの世界を届けます</a></h2>
              <p>参加は少額で、場合によって会場費が必要です。主催者のボランティアによって、活動は全て支えられています。</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div className='pricing-wrap ftco-animate active img' style={{
                backgroundImage: 'url(/images/program-2.jpg)'
              }}>
                <div className='text p-4 d-flex align-items-end'>
                  <a href='#' className='btn-custom px-4 py-2'>遊んだ記録を見る</a>
                  <div>
                    <span className='price'>少額 small amount of money</span>
                    <h3>Let's play the game. Please contact us! </h3>
                    <span style={{
                      background: 'back'
                    }}>参加するには私たちに連絡をください！</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
