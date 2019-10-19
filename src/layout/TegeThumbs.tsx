import React from 'react';
import {Highlight} from '../type/Highlight';
import {TegeThumb} from './TegeThumb';

type Props = {
  highlights: Array<Highlight>;
};
type State = {
};

export class TegeThumbs extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      highlights
    } = this.props;

    return (
      <section className="ftco-section ftco-no-pb ftco-no-pt">
        <div className="container">
          <div className='row'>
            {highlights.map<React.ReactElement>((highlight: Highlight): React.ReactElement =>{
              const {
                tegename,
                tegedescription,
                tegeinspiration
              } = highlight;

              return (
                <TegeThumb
                  tegename={tegename}
                  tegedescription={tegedescription}
                  tegeinspiration={tegeinspiration}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
