import React from 'react';

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
              <li className='nav-item active'><a href='/' className='nav-link'>Home</a></li>
              <li className='nav-item'><a href='/about' className='nav-link'>About</a></li>
              <li className='nav-item'><a href='/events' className='nav-link'>Events</a></li>
              <li className='nav-item'><a href='/tabletop-games' className='nav-link'>Tabletop games</a></li>
              <li className='nav-item'><a href='/pricing' className='nav-link'>Pricing</a></li>
              <li className='nav-item'><a href='/contact' className='nav-link'>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
