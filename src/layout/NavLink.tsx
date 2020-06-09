import React from 'react';

import { Page } from '../type/Page';

type Props = Readonly<{
  page: Page;
  current: Page;
}>;
type State = Readonly<{}>;

export class NavLink extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      page,
      current
    } = this.props;

    if (page === current) {
      return (
        <li className='nav-item active'><a href={page.getPath()} className='nav-link'>{page.getName()}</a></li>
      );
    }

    return (
      <li className='nav-item'><a href={page.getPath()} className='nav-link'>{page.getName()}</a></li>
    );
  }
}
