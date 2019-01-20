import React from 'react'
import { Link } from 'gatsby'
import YouTube from 'react-youtube';


import Layout from '../../components/layout'

const RealPlay = () => (
  <Layout>
    <div>
        <div>
            <h2>Hyundai WRC Real Play</h2>
        </div>

        <div>
            <h3>How can we communicate Hyundai's high-performance capabilities to customers?</h3>   
        </div>

        <YouTube
            videoId="MfogrhOouZE"
        />

        <div className='desc'>
            <p>For the first time in 2014, Hyundai Motor Company joined the World Rally Championship (WRC) to prove their high-performance technology through the i20 WRC rally car. However, Hyundai was the last to join the race compared to other automobile companies and needed to prove their performance capabilities to fans and competitors rapidly. </p>
        </div>
        <div className='desc'>
            <h4>Concept</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar dolor vel libero scelerisque, non tristique erat tristique. Integer sed velit odio. Nullam lorem lectus, consectetur ornare enim ac, condimentum finibus ipsum. Cras bibendum, leo non auctor tristique, augue nisl eleifend libero, vel pellentesque diam urna non tellus. </p>
        </div>
        <div className='desc'>
            <h4>Prototype</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar dolor vel libero scelerisque, non tristique erat tristique. Integer sed velit odio. Nullam lorem lectus, consectetur ornare enim ac, condimentum finibus ipsum. Cras bibendum, leo non auctor tristique, augue nisl eleifend libero, vel pellentesque diam urna non tellus. </p>
        </div>
        <div className='desc'>
            <h4>VR Motion Simulator</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar dolor vel libero scelerisque, non tristique erat tristique. Integer sed velit odio. Nullam lorem lectus, consectetur ornare enim ac, condimentum finibus ipsum. Cras bibendum, leo non auctor tristique, augue nisl eleifend libero, vel pellentesque diam urna non tellus. </p>
        </div>
        <div className='desc'>
            <h4>Hyundai VR+ App</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar dolor vel libero scelerisque, non tristique erat tristique. Integer sed velit odio. Nullam lorem lectus, consectetur ornare enim ac, condimentum finibus ipsum. Cras bibendum, leo non auctor tristique, augue nisl eleifend libero, vel pellentesque diam urna non tellus. </p>
        </div>
        

        <div>
            <Link to="/">Back</Link>
        </div>

    </div>
    
    
    

  </Layout>
)

export default RealPlay
