import React from 'react';

type Props = {
  jumbo: string;
  q: string;
};
type State = {
};

export class Hero extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      jumbo,
      q
    } = this.props;
    return (
      <section className='hero-wrap js-fullheight'>
        <div className='overlay' style={{
          backgroundImage: 'url(images/bg_2.jpg)'
        }} data-stellar-background-ratio='0.5'></div>
        <div className='container'>
          <div className='row no-gutters slider-text js-fullheight align-items-center justify-content-end'>
            <div className='col-md-12 text-center ftco-animate'>
              <h1 className='mb-3 bread' style={{
                backgroundImage: 'url(images/bg_1.jpg)'
              }} data-stellar-background-ratio='0.5'>{jumbo}</h1>
              <p className='breadcrumbs'><span className='mr-2'><a href=''>Home.</a></span> <span>{q}</span></p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
