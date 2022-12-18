import React from 'react'
import './index.css'
import { BsFacebook } from 'react-icons/bs'
import { RiWhatsappFill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='social-icons'>
        <a href='https://facebook.com/fahyvor'><BsFacebook /></a>
        <a href='https://api.whatsapp.com/send?+2349072033837'><RiWhatsappFill /></a>
        <a href='mailto:favourokafor30@gmail.com'><MdEmail /></a>
        <a href='0https://instagram.com/fahyvor'><AiFillInstagram /></a>
      </div>
      <div className='copyright'>
        <small>&copy; KGX {new Date().getFullYear()} </small>
      </div>
    </div>
  )
}

export default Footer