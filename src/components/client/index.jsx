import React from 'react'
import './index.scss'

export default function Client() {
  return (
    <div className="client">
        <div className="client__left">
            <div className="client__left__title">Our Client</div>
            <div className="client__left__paragraph">Several selected clients, who already believe in our service.</div>
            </div>
        <div className="client__right">
            <img max-width={150} max-height={49} src={require('../../assets/photos/google.png')} />
            <img max-width={166} max-height={52}  src={require('../../assets/photos/airbnb.png')} />
            <img max-width={166} max-height={27}  src={require('../../assets/photos/uber.png')} />
            <img max-width={141} max-height={42}  src={require('../../assets/photos/amazon.png')} />
            </div>
    </div>
  )
}
