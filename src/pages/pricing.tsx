import React from 'react';
import {Footer} from '../layout/Footer';
import {Loader} from '../layout/Loader';
import {Header} from '../layout/Header';
import {Nav} from '../layout/Nav';
import {Hero} from '../layout/Hero';
import {TegeAd} from '../layout/TegeAd';
import {JS} from '../layout/JS';

type Props = {
};
type State = {
};

export class Pricing extends React.Component<Props, State> {

  public render(): React.ReactElement {
    return (
      <div>
        <Header/>
        <Nav/>
        <Hero
          jumbo='Pricing'
          q='あなたのための、とっておき価格。'
        />
        <TegeAd/>
        <Footer/>
        <Loader/>
        <JS/>
      </div>
    );
  }
}

export default Pricing;
