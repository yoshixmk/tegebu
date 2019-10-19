import React from 'react';
import {Work} from '../type/Work';
import {TegeWork} from './TegeWork';

type Props = {
  works: Array<Work>
};
type State = {
};

export class TegeGallery extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      works
    } = this.props;

    return (
      <section className='ftco-gallery'>
        <div className='container-wrap'>
          <div className='row no-gutters'>
            {works.map<React.ReactElement>((work: Work): React.ReactElement => {
              const {
                work: image
              } = work;

              return (
                <TegeWork
                  work={image}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
