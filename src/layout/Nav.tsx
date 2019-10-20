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

    switch (page) {
      case Page.INDEX: {
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
                    active={true}
                  />
                  <NavLink
                    href='/about'
                    name='About'
                    active={false}
                  />
                  <NavLink
                    href='/events'
                    name='Events'
                    active={false}
                  />
                  <NavLink
                    href='/tabletop-games'
                    name='Tabletop games'
                    active={false}
                  />
                  <NavLink
                    href='/pricing'
                    name='Pricing'
                    active={false}
                  />
                  <NavLink
                    href='/contact'
                    name='Contact'
                    active={false}
                  />
                </ul>
              </div>
            </div>
          </nav>
        );
      }
      case Page.ABOUT: {
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
                    active={false}
                  />
                  <NavLink
                    href='/about'
                    name='About'
                    active={true}
                  />
                  <NavLink
                    href='/events'
                    name='Events'
                    active={false}
                  />
                  <NavLink
                    href='/tabletop-games'
                    name='Tabletop games'
                    active={false}
                  />
                  <NavLink
                    href='/pricing'
                    name='Pricing'
                    active={false}
                  />
                  <NavLink
                    href='/contact'
                    name='Contact'
                    active={false}
                  />
                </ul>
              </div>
            </div>
          </nav>
        );
      }
      case Page.EVENTS: {
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
                    active={false}
                  />
                  <NavLink
                    href='/about'
                    name='About'
                    active={false}
                  />
                  <NavLink
                    href='/events'
                    name='Events'
                    active={true}
                  />
                  <NavLink
                    href='/tabletop-games'
                    name='Tabletop games'
                    active={false}
                  />
                  <NavLink
                    href='/pricing'
                    name='Pricing'
                    active={false}
                  />
                  <NavLink
                    href='/contact'
                    name='Contact'
                    active={false}
                  />
                </ul>
              </div>
            </div>
          </nav>
        );

      }
      case Page.TABLETOP_GAMES: {
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
                    active={false}
                  />
                  <NavLink
                    href='/about'
                    name='About'
                    active={false}
                  />
                  <NavLink
                    href='/events'
                    name='Events'
                    active={false}
                  />
                  <NavLink
                    href='/tabletop-games'
                    name='Tabletop games'
                    active={true}
                  />
                  <NavLink
                    href='/pricing'
                    name='Pricing'
                    active={false}
                  />
                  <NavLink
                    href='/contact'
                    name='Contact'
                    active={false}
                  />
                </ul>
              </div>
            </div>
          </nav>
        );
      }
      case Page.PRICING: {
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
                    active={false}
                  />
                  <NavLink
                    href='/about'
                    name='About'
                    active={false}
                  />
                  <NavLink
                    href='/events'
                    name='Events'
                    active={false}
                  />
                  <NavLink
                    href='/tabletop-games'
                    name='Tabletop games'
                    active={false}
                  />
                  <NavLink
                    href='/pricing'
                    name='Pricing'
                    active={true}
                  />
                  <NavLink
                    href='/contact'
                    name='Contact'
                    active={false}
                  />
                </ul>
              </div>
            </div>
          </nav>
        );
      }
      case Page.CONTACT: {
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
                    active={false}
                  />
                  <NavLink
                    href='/about'
                    name='About'
                    active={false}
                  />
                  <NavLink
                    href='/events'
                    name='Events'
                    active={false}
                  />
                  <NavLink
                    href='/tabletop-games'
                    name='Tabletop games'
                    active={false}
                  />
                  <NavLink
                    href='/pricing'
                    name='Pricing'
                    active={false}
                  />
                  <NavLink
                    href='/contact'
                    name='Contact'
                    active={true}
                  />
                </ul>
              </div>
            </div>
          </nav>
        );
      }
      default: {
        throw new Error('Unsupported value');
      }
    }
  }
}
