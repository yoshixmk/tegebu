import React from 'react';

import { Page } from '../type/Page';
import { NavLink } from './NavLink';

type Props = Readonly<{
  page: Page;
}>;
type State = Readonly<{}>;

export class Nav extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      page
    } = this.props;

    return (
      <nav className='navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light' id='ftco-navbar'>
        <div className='container'>
          <a className='navbar-brand' href='/'>Tegebu</a>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#ftco-nav' aria-controls='ftco-nav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='oi oi-menu'>Menu</span>
          </button>
          <div className='collapse navbar-collapse' id='ftco-nav'>
            <ul className='navbar-nav ml-auto'>
              <NavLink
                page={Page.INDEX}
                current={page}
              />
              <NavLink
                page={Page.ABOUT}
                current={page}
              />
              <NavLink
                page={Page.EVENTS}
                current={page}
              />
              <NavLink
                page={Page.TABLETOP_GAMES}
                current={page}
              />
              <NavLink
                page={Page.PRICING}
                current={page}
              />
              <NavLink
                page={Page.CONTACT}
                current={page}
              />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
