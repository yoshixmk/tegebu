import React from 'react';

type Props = {
};
type State = {
};

// TODO slogans should output into the yml file

export class Footer extends React.Component<Props, State> {

  public render(): React.ReactElement {
    return (
      <footer className='ftco-footer ftco-section img'>
        <div className='overlay'/>
        <div className='container'>
          <div className='row mb-5'>
            <div className='col-lg-5 col-md-12 mb-10 mb-md-10'>
              <div className='ftco-footer-widget mb-4'>
                <h2 className='ftco-heading-2'>About Us</h2>
                <p>私たちは日本で活動するテーブルゲームが大好きな団体です。これを「てげぶ」と呼んでいます。参加は比較的安めで、主催者のボランティアによって、活動は全て支えられています。</p>
                <p>We are a tabletop games lover group in Japan. We call 'Tegebu' for ourselves. It is reasonable to participate. All activities are supported by the volunteers of the organizers.</p>
                <p>Nous sommes un groupe d'amoureux de jeux de table au Japon. Nous appelons 'Tegebu' pour nous-mêmes. C'est bon marché pour participer. Toutes les acitivités sont soutenues par les bélévoles des organisateurs.</p>
                <p>Nosotros somos un grupo de los amantes de juegos de mesa en Japón. Nosotros llamamos 'Tegebu' para nosotros mismos. Es barato participar. Todas las activitidades son apoyadas por los volintarios de los organizores.</p>
                <ul className='ftco-footer-social list-unstyled float-md-left float-lft mt-5'>
                  <li className='ftco-animate'><a href='https://tegebu.slack.com/'><span className='icon-slack'/></a></li>
                  <li className='ftco-animate'><a href='https://www.facebook.com/groups/692694907900705/'><span className='icon-facebook'/></a></li>
                  <li className='ftco-animate'><a href='mailto:info@example.com'><span className='icon-contact_mail'/></a></li>
                </ul>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mb-5 mb-md-5'>
              <div className='ftco-footer-widget mb-4'>
                <h2 className='ftco-heading-2'>Recent Blog</h2>
                <div className='block-21 mb-4 d-flex'>
                  <a className='blog-img mr-4' style={{
                    backgroundImage: 'url(images/image_1.jpg)'
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
                    backgroundImage: 'url(images/image_2.jpg)'
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
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script>
                All rights reserved | This template is made with <i className='icon-heart' aria-hidden='true'/> by <a href='https://colorlib.com' target='_blank'>Colorlib</a>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
