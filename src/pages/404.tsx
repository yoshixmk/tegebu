import React from 'react';

import { Header } from '../layout/Header';
import { Hero } from '../layout/Hero';
import { JS } from '../layout/JS';
import { Loader } from '../layout/Loader';
import { Nav } from '../layout/Nav';
import { Page } from '../type/Page';

type Props = Readonly<{}>;
type State = Readonly<{}>;

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
