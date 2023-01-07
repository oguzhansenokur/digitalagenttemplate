import React from 'react';
import ContactButton from '../contact-button';
import './index.scss';
import {ReactComponent as ReactLogo} from '../../assets/img/blue-ball.svg';
import {ReactComponent as Yellow} from '../../assets/img/yellow-tri.svg';
import {ReactComponent as Dotted} from '../../assets/img/dotted.svg';



export default function Home() {
  return (
<div className='covered'>
<div className='blue-ball' >
    <ReactLogo/>
    </div>
    <div className='yellow' >
    <Yellow/>
    </div>
    <div className='dotted-1' >
    <Dotted/>
    </div>
    <div className='home'>
      <div className='home__left'>
        <div className='home__left__title'>
          <h2>A Digital Product Agency</h2>
        </div>
        <div className='home__left__text'>
          
          <p>
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
        </div>
        <ContactButton />

      </div>
      <div className="home__right">
        <img src={require('../../assets/photos/bg-carousel.png')}/>
      </div>
    </div>
    </div>
  );
}
