import React from 'react';
import {TegeRule} from '../type/TegeRule';
import {TegePromise} from './TegePromise';

type Props = {
  rules: Array<TegeRule>;
};
type State = {
};

export class TegePromises extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      rules
    } = this.props;

    return (
      <section className='ftco-section ftco-no-pb ftco-no-pt'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 img img-2 order-md-last' style={{
              backgroundImage: 'url(images/bg_2-1.jpg)'
            }}/>
            <div className='col-md-6 py-5'>
              {rules.map<React.ReactElement>((rule): React.ReactElement => {
                const {
                  tegeicon,
                  tegephrase,
                  tegeactivity
                } = rule;

                return (
                  <TegePromise
                    tegeicon={tegeicon}
                    tegephrase={tegephrase}
                    tegeactivity={tegeactivity}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
