import React from 'react';

type Props = Readonly<{}>;
type State = Readonly<{}>;

export class TegeContact extends React.Component<Props, State> {

  public render(): React.ReactElement {
    return (
      <section className='ftco-appointment'>
        <div className='overlay'/>
        <div className='container-wrap'>
          <div className='row no-gutters d-md-flex align-items-center'>
            <div className='col-lg-5 d-flex align-self-stretch'>
              <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12967.0806533878!2d139.7016358!3d35.6580339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x337328def1e2ab26!2z5riL6LC36aeF!5e0!3m2!1sja!2sjp!4v1569857594764!5m2!1sja!2sjp' id='map' className='map' frameBorder='0' style={{
                border: 0
              }} allowFullScreen={false}/>
            </div>
            <div className='col-lg-7 appointment ftco-animate'>
              <div className='heading-section ftco-animate'>
                <h2 className='mb-3'>Contact With Us</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
              <form action='#' className='appointment-form'>
                <div className='d-md-flex'>
                  <div className='form-group'>
                    <input type='text' className='form-control' placeholder='First Name'/>
                  </div>
                  <div className='form-group ml-md-4'>
                    <input type='text' className='form-control' placeholder='Last Name'/>
                  </div>
                </div>
                <div className='d-md-flex'>
                  <div className='form-group'>
                    <input type='text' className='form-control' placeholder='Email Address'/>
                  </div>
                  <div className='form-group ml-md-4'>
                    <input type='text' className='form-control' placeholder='Phone'/>
                  </div>
                </div>
                <div className='d-md-flex'>
                  <div className='form-group'>
                    <textarea name='' cols={30} rows={2} className='form-control' placeholder='Message'/>
                  </div>
                  <div className='form-group ml-md-4'>
                    <input type='submit' value='Appointment' className='btn btn-primary py-3 px-4'/>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
