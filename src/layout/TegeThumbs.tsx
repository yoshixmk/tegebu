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
                tegeinspiration,
                tegeimage
              } = highlight;

              return (
                <TegeThumb
                  key={tegename}
                  tegename={tegename}
                  tegedescription={tegedescription}
                  tegeinspiration={tegeinspiration}
                  tegeimage={tegeimage}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
