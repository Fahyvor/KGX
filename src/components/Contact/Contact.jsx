import React from 'react' 
import {useRef} from 'react';
import emailjs from '@emailjs/browser'
import './index.css'
import Logo from '../../assets/Logo.png'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('fahyvor', 'emplate_6djgdrq', form.current, 'Amff1N1IhpL2XK1Q6')

        e.target.reset();

        console.log("Request Submitted");
    };
  return (
    <div className='contact'>
        <div className='request-form'>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" required />
            <input type="email" name="email" placeholder='Email address' required />
            <textarea type="message" name="message" placeholder='Place Your Order' required />
            <button type="submit" className='form-button'>Send Request</button>
        </form>
        </div>

        <div className='social'>
            <p>
                We have been waiting patiently for you 
                <br />We are here to serve you better
            </p>
            <a href='/'>
            <img src={Logo} className='kgx-logo' />
            </a>
        </div>
    </div>
  )
}

export default Contact