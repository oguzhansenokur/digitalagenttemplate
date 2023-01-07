import React from 'react'
import './index.scss'

export default function ServiceBox({icon,title,desc}) {
  // const [imgSrc,setImgSrc]=React.useState('../../assets/photos/searchbox.png');

  // switch(icon)
  // {
  //   case '1':
  //     setImgSrc('../../assets/photos/searchbox.png')
  //     break;
  // }


  return (
    <div className='service-box'>
      <div className="service-box__icon"><img src={icon==='1' ? require('../../assets/photos/searchbox.png'): icon==='2' ? require('../../assets/photos/code.png'): icon==='3' ? require('../../assets/photos/wallet.png'): icon==='4' ? require('../../assets/photos/analytics.png'):null} alt='image'/></div>
      <div className="service-box__title">{title}</div>
      <div className="service-box__desc">{desc}</div>

    </div>
  )
}
