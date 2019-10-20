import React from 'react';
import {Word} from '../type/Word';
import {TegeTestimony} from './TegeTestimony';

type Props = {
  words: Array<Word>;
};
type State = {
};

export class TegeTestimonies extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      words
    } = this.props;

    return (
      <section className='ftco-section testimony-section' style={{
      backgroundImage: 'url(images/bg_4.jpg)'
      }} data-stellar-background-ratio='0.5'>
        <div className='overlay'/>
        <div className='container'>
          <div className='row justify-content-center mb-5'>
            <div className='col-md-7 heading-section text-center ftco-animate'>
              <span className='subheading'>
                <i className='db-left'/>Testimonial<i className='db-right'/>
              </span>
              <h2 className='mb-3'>What People Say</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind</p>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-md-8 ftco-animate'>
              <div className='row ftco-animate'>
                <div className='col-md-12'>
                  <div className='carousel-testimony owl-carousel ftco-owl'>
                    {words.map<React.ReactElement>((word: Word): React.ReactElement => {
                      const {
                        headshot,
                        word: phrase,
                        by,
                        position
                      } = word;

                      return (
                        <TegeTestimony
                          key={phrase}
                          headshot={headshot}
                          word={phrase}
                          by={by}
                          position={position}
                        />
                      );
                    })}
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
