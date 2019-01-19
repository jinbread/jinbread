import React from 'react'
import { Link } from 'gatsby'
import './index.css'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hej!</h1>
    <h2>Jinjae Lee is a multi-disciplinary interaction designer, make design static to kinetic, blending digital and physical experiences based in Stockholm.</h2>


    

    <div className='container'>
      <h4>Works</h4>
      <div className='content'>
        <p className='title'><Link to="https://www.youtube.com/watch?v=MfogrhOouZE">Hyundai WRC Real Play</Link></p>
        <p className='detail'>Art Direction, Experience Design</p>
        <p className='title'><a href='https://www.youtube.com/watch?v=6a97u3tkFQo'>Hyundai IONIQ Explore Plant VR</a></p>
        <p className='detail'>Art Direction, Experience Design</p>
        <p className='title'><a href='#'>Electrolux Digital UX Foundation</a></p>
        <p className='detail'>Interaction Design, Prototyping</p>
        <p className='title'><a href='#'>Blueair Interaction Design</a></p>
        <p className='detail'>Interaction Design, UX Prototyping</p>
        <p className='title'><a href='#'>Sellpy UX Redesign</a></p>
        <p className='detail'>Inteaction Design, Prototyping</p>
      </div>
    </div>

    <div className='container'>
      <h4>Sides</h4>
      <div className='content'>
        <p className='title'><a href='https://www.behance.net/gallery/71168665/HIUT-Make-your-name-in-Korean'>Project Hiut</a></p>
        <p className='detail'>Interation Design</p>
        <p className='title'><a href='https://mid-spot.netlify.com/'>Mid-spot website</a></p>
        <p className='detail'>Frontend Development</p>
        <p className='title'><a href='https://followmove.netlify.com/'>Follow your move</a></p>
        <p className='detail'>UI Development, two.js</p>
        <p className='title'><a href='#'>CLO:CK:ED:IN</a></p>
        <p className='detail'>Creative Coding, Processing, Arduino</p>
      </div>
    </div>

    <div className='container'>
      <h4>Experiences</h4>
      <div className='content'>
        <p className='title'>Interaction Designer, <a href='http://www.above.se/'>Above</a></p>
        <p className='detail'>2018.03 - now</p>
        <p className='title'>Interactive Art Director, <a href='https://www.hyperisland.com/'>Hyper Island</a></p>
        <p className='detail'>2017.08 - 2018.06</p>
        <p className='title'>Creative Developer, <a href='http://innocean.com/ww-en/'>Innocean</a></p>
        <p className='detail'>2015.01 - 2017.05</p>
      </div>
      
    </div>

    <div className='container'>
      <h4>Skills</h4>
      <div className='content-skill'>
        <p>User Research</p>
        <p>Interaction Design</p>
        <p>Prototyping</p>
        <p>UX Engineering</p>
        <p>Branding</p>
      </div>
    </div>
    

  </Layout>
)

export default IndexPage
