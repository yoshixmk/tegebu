import React from 'react';
import {Link} from 'gatsby';

type Props = {
  href: string;
  name: string;
};
type State = {
};

export class NavLink extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      href,
      name
    } = this.props;

    return (
      <li className='nav-item active'><Link to={href} className='nav-link'>{name}</Link></li>
    );
  }
}
