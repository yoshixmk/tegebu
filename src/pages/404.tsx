import React from 'react';
import {Header} from '../layout/Header';
import {Nav} from '../layout/Nav';
import {Page} from '../type/Page';
import {Hero} from '../layout/Hero';
import {Loader} from '../layout/Loader';
import {JS} from '../layout/JS';

type Props = {
};
type State = {
};

export class NotFound extends React.Component<Props, State> {

  public render(): React.ReactElement {
    return (
      <div>
        <Header/>
        <Nav
          page={Page.NONE}
        />
        <Hero
          jumbo='Not found'
          q='I don&#39;t see any God up here'
        />
        <JS/>
        <Loader/>
      </div>
    );
  }
}

export default NotFound;
