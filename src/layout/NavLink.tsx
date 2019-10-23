import React from 'react';
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

    if (page.is(name)) {
      return (
        <li className='nav-item active'><a href={href} className='nav-link'>{name}</a></li>
      );
    }

    return (
      <li className='nav-item'><a href={href} className='nav-link'>{name}</a></li>
    );
  }
}
