import React from 'react';
import mainLogo from '../../assets/Logo.png'
import './index.css'
import { useState } from 'react'
import { GoThreeBars } from 'react-icons/go'

const Header = () => {
    const [open, setOpen] = useState(false);
    const showDropdown =()=>{
        setOpen(true);
    }
    const hideDropdown=()=>{
        setOpen(false);
    }

  return (
    <div className='header'>
        <img src={mainLogo} className='logo-kgx' alt='Kaays Graphix'/>
        <div className='headnav'>
            <a href='/'>
                <h4>Home</h4>
            </a>
            <a href='/contact' >
                <h4>Contact</h4>
            </a>
            <a href='/portfolio' >
                <h4>Portfolio</h4>
            </a>
            <a href='/about' >
                <h4>About</h4>
            </a>
        </div>

        <div className='headbutton'>
            <h4 className='sign'><a href='/contact' className='signup'>
                Place Order
            </a>
            </h4>
        </div>

        <div className='mobile-nav' onClick={showDropdown} onMouseLeave={hideDropdown}>
                {open ?(
                    <div className='mobile-headnav'>
                    <a href='/contact' >
                        <h4>Contact</h4>
                    </a>
                    <a href='/portfolio' >
                        <h4>Portfolio</h4>
                    </a>
                    <a href='/about' >
                        <h4>About</h4>
                    </a>
                </div>
                ): 
                
                null}
            <GoThreeBars size={40} />
        </div>
    </div>
  )
}

export default Header