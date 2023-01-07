import React from 'react'
import ServiceBox from '../service-box'
import './index.scss'
import {ReactComponent as BlueBG} from '../../assets/img/bg-blue.svg';
import {ReactComponent as PurpleCircle} from '../../assets/img/pruple-circle.svg';
import {ReactComponent as YellowBG} from '../../assets/img/yellow-bg.svg';
import {ReactComponent as Dotted} from '../../assets/img/dotted.svg';



export default function Services() {
  return (
    <div  >
      <div className='blue-bg'>
      <BlueBG/>

      </div>
      <div className='purple-circle'>
    <PurpleCircle/>
      </div>
      <div className='yellow-bg'>
    <YellowBG/>
      </div>
      <div className='dotted'>
    <Dotted/>
      </div>

    <div className='services'>
        <div className='services__left'>
            <div className="services__left__title"><h3>Our Services for your Business!</h3></div>
            <div className="services__left__desc">We build readymade websites, mobile applications, and elaborate online business services.</div>
        </div>
        <div className="services__right">
            <div className="services__right__left">
            <ServiceBox icon={'1'} title='Business Idea Planning' desc='We present you a proposal and discuss niffty-gritty like' />
            <ServiceBox icon={'2'} title='Development Website and App' desc='Communication protocols apart from engagement models' />
          

            </div>
            <div className='services__right__right' >
            <ServiceBox icon={'3'} title='Financial Planning System' desc='Protocols apart from aengage models, pricing billing' />
            <ServiceBox icon={'4'} title='Market Analysis Project' desc='Protocols apart from aengage models, pricing billing' />
            </div>
        </div>

    </div>
        <div className='information-block' >
    <div className='information-block__content'>
    <div className='information-block__content__left'>
    <img width={550} src={require('../../assets/img/digitalagency.jpg')} />
    <div className='yellow-ball' > </div>

</div>
<div className='information-block__content__right'>
    <h4 className='heading-40' >We are Served to Our Customer Since 2005</h4>
    <p className='text-color-gray typo-16'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
</div>
    </div>
    </div>
 
    </div>
  )
}
