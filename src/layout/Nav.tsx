import React from 'react';
import {NavLink} from './NavLink';
import {Page} from '../type/Page';

type Props = {
  page: Page;
};
type State = {
};

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
                href='/'
                name='Home'
                page={page}
              />
              <NavLink
                href='/about'
                name='About'
                page={page}
              />
              <NavLink
                href='/events'
                name='Events'
                page={page}
              />
              <NavLink
                href='/tabletop-games'
                name='Tabletop games'
                page={page}
              />
              <NavLink
                href='/pricing'
                name='Pricing'
                page={page}
              />
              <NavLink
                href='/contact'
                name='Contact'
                page={page}
              />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
