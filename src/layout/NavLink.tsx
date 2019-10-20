import React from 'react';
import {Link} from 'gatsby';

type Props = {
  href: string;
  name: string;
  active: boolean;
};
type State = {
};

export class NavLink extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      href,
      name,
      active
    } = this.props;

    if (active) {
      return (
        <li className='nav-item active'><Link to={href} className='nav-link'>{name}</Link></li>
      );
    }

    return (
      <li className='nav-item'><Link to={href} className='nav-link'>{name}</Link></li>
    );
  }
}
