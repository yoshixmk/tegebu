import React from 'react';
import {Member} from '../type/Member';

type Props = Member;
type State = {
};

export class TegeMember extends React.Component<Props, State> {

  public render(): React.ReactElement {
    const {
      subheading,
      memberName,
      memberImage,
      description,
      position
    } = this.props;

    switch (position) {
      case 'left': {
        return (
          <div className='col-lg-6 d-flex'>
            <div className='coach d-sm-flex align-items-stretch'>
              <div className='img' style={{
                backgroundImage: `url(${memberImage})`
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
      case 'right': {
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
                backgroundImage: `url(${memberImage})`
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
