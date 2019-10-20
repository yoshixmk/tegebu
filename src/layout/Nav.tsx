import React from 'react';
import {NavLink} from './NavLink';

type Props = {
};
type State = {
};

export class Nav extends React.Component<Props, State> {

  public render(): React.ReactElement {
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
              />
              <NavLink
                href='/about'
                name='About'
              />
              <NavLink
                href='/events'
                name='Events'
              />
              <NavLink
                href='/tabletop-games'
                name='Tabletop games'
              />
              <NavLink
                href='/pricing'
                name='Pricing'
              />
              <NavLink
                href='/contact'
                name='Contact'
              />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
