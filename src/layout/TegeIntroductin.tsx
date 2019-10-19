import React from 'react';

type Props = {
};
type State = {
};

export class TegeIntroductin extends React.Component<Props, State> {

  public render(): React.ReactElement {
    return (
      <section className='ftco-about d-md-flex'>
        <div className='one-half img' style={{
          backgroundImage: 'url(images/about.jpg);'
        }}>
          <a href='https://vimeo.com/45830194' className='icon popup-vimeo d-flex justify-content-center align-items-center'>
            <span className='icon-play'/>
          </a>
        </div>
        <div className='one-half ftco-animate'>
          <div className='heading-section ftco-animate '>
            <h2 className='mb-4'>Tegebu Since 2019</h2>
          </div>
          <div>
            <p>Tegebu is an abbreviation of Japanese-like pronunciation of 'tabletop games club' as 'teburutoppu gemusu kurabu'. In other languages, Tegebu is called in such ways.</p>
            <p>Tabletop games club (English: English)</p>
            <p>卓上遊戯倶楽部 (日本語: Japanese)</p>
            <p>桌面游戏俱乐部 (中文: Chinese)</p>
            <p>Club de jeux de table (Français: French)</p>
            <p>Club de juegos de mesa (Español: Spanish)</p>
            <p>Câu lạc bộ tabletop games (Tiếng Việt: Vietnamese)</p>
          </div>
        </div>
      </section>
    );
  }
}
