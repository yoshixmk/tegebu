import React from 'react';

type Props = Readonly<{
  src: string;
}>;
type State = Readonly<{}>;

const id: string = Math.random().toString();

export class Script extends React.Component<Props, State> {

  public componentDidMount(): void {
    const {
      src
    } = this.props;

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.defer = true;

    const container: HTMLElement | null = document.getElementById(id);

    if (container === null) {
      return;
    }

    container.replaceWith(script);
  }

  public render(): React.ReactElement {
    return (
      <div id={id}/>
    );
  }
}
