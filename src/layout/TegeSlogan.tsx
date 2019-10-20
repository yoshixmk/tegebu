import React from 'react';

type Props = {
};
type State = {
};

// TODO each slogan should output into the yml file

export class TegeSlogan extends React.Component<Props, State> {

  public render(): React.ReactElement {
    return (
      <div className='row justify-content-center mb-5'>
        <div className='col-md-10 heading-section text-center ftco-animate'>
          <span className='subheading'>
            <i className='db-left'/>Who are weu?<i className='db-right'/>
          </span>
          <h2 className='mb-3'>私たちは日本で活動するテーブルゲームが大好きな団体です。これを「てげぶ」と呼んでいます。参加費は少額で、場合によって会場費が必要です。主催者のボランティアによって、活動は全て支えられています。</h2>
          <p>We are a tabletop games lover group in Japan. We call 'Tegebu' for ourselves. It is reasonable to participate. All activities are supported by the volunteers of the organizers.</p>
          <p>Nous sommes un groupe des amoureux de jeux de table au Japon. Nous appelons 'Tegebu' pour nous-mêmes. C'est bon marché pour participer. Toutes les acitivités sont soutenues par les bélévoles des organisateurs.</p>
          <p>Nosotros somos un grupo de los amantes de juegos de mesa en Japón. Nosotros llamamos 'Tegebu' para nosotros mismos. Es barato participar. Todas las activitidades son apoyadas por los volintarios de los organizores.</p>
        </div>
      </div>
    );
  }
}
