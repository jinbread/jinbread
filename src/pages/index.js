import React from 'react'
import { Link } from 'gatsby'
import './index.css'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hej!</h1>
    <h2>Jinjae Lee is a multi-disciplinary interaction designer, make design static to kinetic, blending digital and physical experiences based in Seoul and Stockholm.</h2>
    <div className='container'>
      <h4>Experiences</h4>
      <div className='content'>
        <p className='title'>Interaction Designer, <a href='http://www.above.se/'>Above</a></p>
        <p className='detail'>2018.03 - now</p>
        <p className='title'>Interactive Art Director, <a href='https://www.hyperisland.com/'>Hyper Island</a></p>
        <p className='detail'>2017.08 - 2018.06</p>
        <p className='title'>Creative Developer, <a href='http://innocean.com/ww-en/'>Innocean</a></p>
        <p className='detail'>2016.11 - 2017.05</p>
        <p className='title'>Digital Producer, <a href='http://innocean.com/ww-en/'>Innocean</a></p>
        <p className='detail'>2015.01 - 2016.11</p>
      </div>
      
    </div>

    

    <div className='container'>
      <h4>Works</h4>
      <div className='content'>
        <p className='title'><Link to="/wrc-real-play">Hyundai WRC Real Play</Link></p>
        <p className='detail'>UX Design</p>
        <p className='title'><a href='https://www.youtube.com/watch?v=6a97u3tkFQo'>Hyundai IONIQ Explore Plant VR</a></p>
        <p className='detail'>Art Direction</p>
        <p className='title'><a href='#'>CLO:CK:ED:IN</a></p>
        <p className='detail'>Experience Design</p>
        <p className='title'><a href='#'>Sellpy UX Redesign</a></p>
        <p className='detail'>Interaction Design</p>
      </div>
    </div>

    <div className='container'>
      <h4>Experiments</h4>
      <div className='content'>
        <p className='title'><a href='https://followmove.netlify.com/'>Follow your move</a></p>
        <p className='detail'>Two.js</p>
        <p className='title'><a href='#'>Lost in Space</a></p>
        <p className='detail'>Three.js + React</p>
        <p className='title'><a href='#'>Type in Motion</a></p>
        <p className='detail'>Framer</p>
        <p className='title'><a href='#'>Glanceable Animation</a></p>
        <p className='detail'>Framer</p>
        
      </div>
    </div>

    <div className='container'>
      <h4>Skills</h4>
      <div className='content-skill'>
        <p>UX Research</p>
        <p>Interaction Design</p>
        <p>Prototyping</p>
        <p>Creative Coding</p>
        <p>Physical Computing</p>
        <p>Javascript</p>
        <p>Framer</p>
        <p>React</p>
        
      </div>
    </div>
    

  </Layout>
)

export default IndexPage
