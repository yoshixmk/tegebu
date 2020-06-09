import React from 'react';

import { Member } from '../type/Member';

type Props = Member & Readonly<{
  index: number;
}>;
type State = Readonly<{}>;

export class TegeMember extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      subheading,
      memberName,
      memberImage,
      description,
      index
    } = this.props;

    const mod: number = index % 4;

    switch (mod) {
      case 0:
      case 1: {
        return (
          <div className='col-lg-6 d-flex'>
            <div className='coach d-sm-flex align-items-stretch'>
              <div className='img' style={{
                backgroundImage: `url(/images/${memberImage})`
              }}/>
              <div className='text py-4 px-5 ftco-animate'>
                <span className='subheading'>{subheading}</span>
                <h3><a href='#'>{memberName}</a></h3>
                <p>{description}</p>
                <ul className='ftco-social-media d-flex mt-4'>
                  <li className='ftco-animate'><a href='https://tegebu.slack.com/' className='mr-2 d-flex justify-content-center align-items-center'><span className='icon-slack'/></a></li>
                  <li className='ftco-animate'><a href='https://www.facebook.com/groups/692694907900705/' className='mr-2 d-flex justify-content-center align-items-center'><span className='icon-facebook'/></a></li>
                  <li className='ftco-animate'><a href='mailto:info@tegebu.com' className='mr-2 d-flex justify-content-center align-items-center'><span className='icon-contact_mail'/></a></li>
                </ul>
              </div>
            </div>
          </div>
        );
      }
      case 2:
      case 3: {
        return (
          <div className='col-lg-6 d-flex'>
            <div className='coach d-sm-flex align-items-stretch'>
              <div className='text py-4 px-5 ftco-animate'>
                <span className='subheading'>{subheading}</span>
                <h3><a href='#'>{memberName}</a></h3>
                <p>{description}</p>
                <ul className='ftco-social-media d-flex mt-4'>
                  <li className='ftco-animate'><a href='https://tegebu.slack.com/' className='mr-2 d-flex justify-content-center align-items-center'><span className='icon-slack'/></a></li>
                  <li className='ftco-animate'><a href='https://www.facebook.com/groups/692694907900705/' className='mr-2 d-flex justify-content-center align-items-center'><span className='icon-facebook'/></a></li>
                  <li className='ftco-animate'><a href='mailto:info@tegebu.com' className='mr-2 d-flex justify-content-center align-items-center'><span className='icon-contact_mail'/></a></li>
                </ul>
              </div>
              <div className='img order-xl-last' style={{
                backgroundImage: `url(/images/${memberImage})`
              }}/>
            </div>
          </div>
        );
      }
      default: {
        throw new Error('invalid position');
      }
    }
  }
}
