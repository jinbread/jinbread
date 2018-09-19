import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

import './footer.css'

const Footer = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
        className='footer'
        style={{
            margin: '0 auto',
            maxWidth: 640,
            padding: '1.45rem 1.0875rem',
        }}
    >
        <div className='soMe'>
            <a href="https://www.instagram.com/jinbread/"><FontAwesomeIcon className='icon' style={{width: 22, height: 22}} icon={faInstagram} /></a>
            <a href="https://dribbble.com/jinbread"><FontAwesomeIcon className='icon' style={{width: 20, height: 20}} icon={faDribbble} /></a>
        </div>
        <div>
            <p style={{ margin: 0, textAlign: 'right' }}>
            <a 
                href="mailto:jinbread.lee@gmail.com"
                style={{
                    color: '#dddddd',
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                }}
            >jinbread.lee@gmail.com</a>
            </p>
        </div>  
    </div>
  </div>
)

export default Footer
