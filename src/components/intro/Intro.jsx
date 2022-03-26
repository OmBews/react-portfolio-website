import React from 'react'
import './intro.css'
import Me from '../../img/me.png'

function Intro() {
  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, My name is</h2>
                <h1 className='i-name'>Tien Le</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Java Developer</div>
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">Blockchain Developer</div>
                        <div className="i-title-item">Scrum Master</div>
                        <div className="i-title-item">Software Engineer</div>
                    </div>
                </div>
                <div className="i-description">
                    I design and develop services for customer of all sizes, 
                    specializing in creating stylist, modern websites, web services, 
                    online stores.
                </div>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Me} alt="" className="i-img" />
        </div>
    </div>
  )
}

export default Intro