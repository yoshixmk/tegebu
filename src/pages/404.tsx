import React from 'react';

type Props = {
};
type State = {
};

export class NotFoundPage extends React.Component<Props, State> {

  public render(): React.ReactElement {
    return (
      <div>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    );
  }
}
