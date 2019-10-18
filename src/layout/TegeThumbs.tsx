import React from 'react';
import {TegeHighlight} from '../type/TegeHighlight';
import {TegeThumb} from './TegeThumb';

type Props = {
  hightlights: Array<TegeHighlight>;
};
type State = {
};

export class TegeThumbs extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      hightlights
    } = this.props;

    return (
      <section className="ftco-section ftco-no-pb ftco-no-pt">
        <div className="container">
          <div className='row'>
            {hightlights.map<React.ReactElement>((hightlight: TegeHighlight): React.ReactElement =>{
              const {
                tegename,
                tegedescription,
                tegeinspiration
              } = hightlight;

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
