import React from 'react';

import { Member, Members } from '../type/Member';
import { TegeMember } from './TegeMember';

type Props = Readonly<{
  members: Members;
}>;
type State = Readonly<{}>;

export class TegeMembers extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      members
    } = this.props;

    return (
      <section className='ftco-section'>
        <div className='container'>
          <div className='row justify-content-center mb-5'>
            <div className='col-md-7 heading-section text-center ftco-animate'>
              <span className='subheading'>
                <i className='db-left'/>Organizer<i className='db-right'/>
              </span>
              <h2 className='mb-3'>Our Coaches</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind</p>
            </div>
          </div>
          <div className='row no-gutters'>
            {members.map<React.ReactElement>((member: Member, index: number): React.ReactElement => {
              const {
                subheading,
                memberName,
                memberImage,
                description
              } = member;

              return (
                <TegeMember
                  key={memberName}
                  subheading={subheading}
                  memberName={memberName}
                  memberImage={memberImage}
                  description={description}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
