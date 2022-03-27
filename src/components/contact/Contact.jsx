import React, { useContext, useRef } from 'react'
import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context'

function Contact() {
    const formRef = useRef();
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_qg3wzxh', 'template_0nbs99f', formRef.current, 'DtTdQJq2LAKh_dTeS')
                .then((result) => {
                    console.log(result.text);
                    alert("Thank you for reaching out. I will contact you as soon as posible.")
                }, (error) => {
                    console.log(error.text);
                    alert("Oops... Something wrong :(")
                });
    }
  return (
    <div className='c'>
        <div className="c-bg">
            
        </div>
        <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" /> +84 834 020 796
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" /> dactien020796@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" /> 85 Pham Van Hai street, Ho Chi Minh city, Vietnam
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the suitable project comes.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Name' name='user_name' />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Subject' name='user_subject' />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Email' name='user_email' />
                        <textarea style={{backgroundColor: darkMode && "#333"}} cols="30" rows="5" placeholder='Message' name='message'></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Contact