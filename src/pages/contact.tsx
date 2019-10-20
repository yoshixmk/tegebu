import React from 'react';
import {Footer} from '../layout/Footer';
import {Loader} from '../layout/Loader';
import {Header} from '../layout/Header';
import {Nav} from '../layout/Nav';
import {Hero} from '../layout/Hero';
import {TegeContact} from '../layout/TegeContact';
import {JS} from '../layout/JS';

type Props = {
};
type State = {
};

export class Contact extends React.Component<Props, State> {

  public render(): React.ReactElement {
    return (
      <div>
        <Header/>
        <Nav/>
        <Hero
          jumbo='Contact us'
          q='Contact us'
        />
        <TegeContact/>
        <Footer/>
        <Loader/>
        <JS/>
      </div>
    );
  }
}

export default Contact;
