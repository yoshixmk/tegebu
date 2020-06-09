import React from 'react';

type Props = Readonly<{}>;
type State = Readonly<{}>;

export class IndexHero extends React.Component<Props, State> {

  public render(): React.ReactElement {
    return (
      <section className='hero-wrap js-fullheight'>
        <div className='overlay' style={{
          backgroundImage: 'url(/images/bg_2.jpg)'
        }} data-stellar-background-ratio='0.5'/>
        <div className='container'>
          <div className='row no-gutters slider-text js-fullheight align-items-center justify-content-end'>
            <h3 className='v'>
              <a href='https://vimeo.com/45830194' className='popup-vimeo'>
                <div className='icon d-flex justify-content-center align-items-center'>
                  <span className='icon-play'/>
                </div>
                <span>Tabletop Games Club</span> <br/>Watch Our Videos
              </a>
            </h3>
            <div className='col-md-12 text-center ftco-animate'>
              <h1 className='mt-5' style={{
                backgroundImage: 'url(/images/bg_1.jpg)'
              }} data-stellar-background-ratio='0.5'>Tege<br/>bu</h1>
              <h2>Tabletop Games Club</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
