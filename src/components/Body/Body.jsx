import React from 'react'
import './index.css'
import Graphics from '../../assets/Graphics.jpg'

const Body = () => {
  return (
    <div className='body'>
        <div className='body-image'>
          <img src={Graphics} alt='KGX' className='graphics'/>
        </div>
        <div className='body-writeup'>
        <h1>Good Graphics is What <br></br>EVERY BUSINESS NEEDS</h1>
        <p>
            The public is familiar with bad design than good design.
            <br></br>It is, in effect, conditioned to prefer bad design, because
            <br></br>that is what it lives with. The new becomes threatening,
            <br></br>the old reassuring.
        </p>
        </div>

        <div className='button-body'>
            <h3 className='readmore'>
                <a href='/about'>Read More</a>
            </h3>
            <h3 className='contact-us'><a href='/contact'>Contact Us</a>
            </h3>
        </div>
    </div>
  )
}

export default Body