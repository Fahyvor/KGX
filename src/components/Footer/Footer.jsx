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
        <a href='https://facebook.com/fahyvor' target='_blank'><BsFacebook /></a>
        <a href='https://wa.me/2349072033837' target='_blank'><RiWhatsappFill /></a>
        <a href='mailto:favourokafor30@gmail.com' target='_blank'><MdEmail /></a>
        <a href='https://instagram.com/fahyvor' target='_blank'><AiFillInstagram /></a>
      </div>
      <div className='copyright'>
        <small>&copy; KGX 2020 - {new Date().getFullYear()} </small>
      </div>
    </div>
  )
}

export default Footer
