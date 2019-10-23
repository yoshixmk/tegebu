import React from 'react';
import {Link} from 'gatsby';
import {Page} from '../type/Page';

type Props = {
  href: string;
  name: string;
  page: Page;
};
type State = {
};

export class NavLink extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      href,
      name,
      page
    } = this.props;

    switch (page) {
      case Page.INDEX: {
        if (name === 'Home') {
          return (
            <li className='nav-item active'><Link to={href} className='nav-link'>{name}</Link></li>
          );
        }

        return (
          <li className='nav-item'><Link to={href} className='nav-link'>{name}</Link></li>
        );
      }
      case Page.ABOUT: {
        if (name === 'About') {
          return (
            <li className='nav-item active'><Link to={href} className='nav-link'>{name}</Link></li>
          );
        }

        return (
          <li className='nav-item'><Link to={href} className='nav-link'>{name}</Link></li>
        );
      }
      case Page.EVENTS: {
        if (name === 'Page') {
          return (
            <li className='nav-item active'><Link to={href} className='nav-link'>{name}</Link></li>
          );
        }

        return (
          <li className='nav-item'><Link to={href} className='nav-link'>{name}</Link></li>
        );
      }
      case Page.TABLETOP_GAMES: {
        if (name === 'Tabletop games') {
          return (
            <li className='nav-item active'><Link to={href} className='nav-link'>{name}</Link></li>
          );
        }

        return (
          <li className='nav-item'><Link to={href} className='nav-link'>{name}</Link></li>
        );
      }
      case Page.PRICING: {
        if (name === 'Pricing') {
          return (
            <li className='nav-item active'><Link to={href} className='nav-link'>{name}</Link></li>
          );
        }

        return (
          <li className='nav-item'><Link to={href} className='nav-link'>{name}</Link></li>
        );
      }
      case Page.CONTACT: {
        if (name === 'Contact') {
          return (
            <li className='nav-item active'><Link to={href} className='nav-link'>{name}</Link></li>
          );
        }

        return (
          <li className='nav-item'><Link to={href} className='nav-link'>{name}</Link></li>
        );
      }
      default: {
        throw new Error('Unsupported value');
      }
    }
  }
}
