import React from 'react';

import { Slogans } from '../type/Slogans';

type Props = Readonly<{
  slogans: Slogans;
}>;
type State = Readonly<{}>;

export class Footer extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      slogans
    } = this.props;

    return (
      <footer className='ftco-footer ftco-section img'>
        <div className='overlay'/>
        <div className='container'>
          <div className='row mb-5'>
            <div className='col-lg-5 col-md-12 mb-10 mb-md-10'>
              <div className='ftco-footer-widget mb-4'>
                <h2 className='ftco-heading-2'>About Us</h2>
                <p>{slogans.ja}</p>
                <p>{slogans.en}</p>
                <p>{slogans.fr}</p>
                <p>{slogans.es}</p>
                <p>{slogans.zh}</p>
                <ul className='ftco-footer-social list-unstyled float-md-left float-lft mt-5'>
                  <li className='ftco-animate'><a href='https://tegebu.slack.com/'><span className='icon-slack'/></a></li>
                  <li className='ftco-animate'><a href='https://www.facebook.com/groups/692694907900705/'><span className='icon-facebook'/></a></li>
                  <li className='ftco-animate'><a href='mailto:info@tegebu.com'><span className='icon-contact_mail'/></a></li>
                </ul>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mb-5 mb-md-5'>
              <div className='ftco-footer-widget mb-4'>
                <h2 className='ftco-heading-2'>Recent Blog</h2>
                <div className='block-21 mb-4 d-flex'>
                  <a className='blog-img mr-4' style={{
                    backgroundImage: 'url(/images/image_1.jpg)'
                  }}/>
                  <div className='text'>
                    <h3 className='heading'><a href='#'>Even the all-powerful Pointing has no control about</a></h3>
                    <div className='meta'>
                      <div><a href='#'><span className='icon-calendar'/> January 04, 2019</a></div>
                      <div><a href='#'><span className='icon-person'/> Admin</a></div>
                      <div><a href='#'><span className='icon-chat'/> 19</a></div>
                    </div>
                  </div>
                </div>
                <div className='block-21 mb-4 d-flex'>
                  <a className='blog-img mr-4' style={{
                    backgroundImage: 'url(/images/image_2.jpg)'
                  }}/>
                  <div className='text'>
                    <h3 className='heading'><a href='#'>Even the all-powerful Pointing has no control about</a></h3>
                    <div className='meta'>
                      <div><a href='#'><span className='icon-calendar'/> January 04, 2019</a></div>
                      <div><a href='#'><span className='icon-person'/> Admin</a></div>
                      <div><a href='#'><span className='icon-chat'/> 19</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 mb-5 mb-md-5'>
              <div className='ftco-footer-widget mb-4'>
                <h2 className='ftco-heading-2'>Have Questions?</h2>
                <div className='block-23 mb-3'>
                  <ul>
                    <li><span className='icon icon-map-marker'/><span className='text'>東京都渋谷区道玄坂一丁目</span></li>
                    <li><a href='#'><span className='icon icon-envelope'/><span className='text'>info@tegebu.com</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <p>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with <i className='icon-heart' aria-hidden='true'/> by <a href='https://colorlib.com' target='_blank'>Colorlib</a>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
