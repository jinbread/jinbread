import React from 'react'
import { Link } from 'gatsby'
import YouTube from 'react-youtube';


import Layout from '../../components/layout'

const ExplorePlant = () => (
  <Layout>
    <div>
        <div>
            <h2>Explore VR Plant</h2>
        </div>

        <div>
            <h3>How can we communicate how the electric car is manufactured in an exciting way?</h3>   
        </div>

        <YouTube
            videoId="6a97u3tkFQo"
            className='youtube'
        />
        

        <div className='desc'>
            <h4>Challenge</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar dolor vel libero scelerisque, non tristique erat tristique. Integer sed velit odio. Nullam lorem lectus, consectetur ornare enim ac, condimentum finibus ipsum. Cras bibendum, leo non auctor tristique, augue nisl eleifend libero, vel pellentesque diam urna non tellus. </p>
        </div>
        <div className='desc'>
            <h4>Concept</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar dolor vel libero scelerisque, non tristique erat tristique. Integer sed velit odio. Nullam lorem lectus, consectetur ornare enim ac, condimentum finibus ipsum. Cras bibendum, leo non auctor tristique, augue nisl eleifend libero, vel pellentesque diam urna non tellus. </p>
        </div>
        <div className='desc'>
            <h4>Production</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar dolor vel libero scelerisque, non tristique erat tristique. Integer sed velit odio. Nullam lorem lectus, consectetur ornare enim ac, condimentum finibus ipsum. Cras bibendum, leo non auctor tristique, augue nisl eleifend libero, vel pellentesque diam urna non tellus. </p>
        </div>
        <div className='desc'>
            <h4>Hyundai Motorstudio Digital</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar dolor vel libero scelerisque, non tristique erat tristique. Integer sed velit odio. Nullam lorem lectus, consectetur ornare enim ac, condimentum finibus ipsum. Cras bibendum, leo non auctor tristique, augue nisl eleifend libero, vel pellentesque diam urna non tellus. </p>
        </div>
        <div className='desc'>
            <h4>Google Expedition</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar dolor vel libero scelerisque, non tristique erat tristique. Integer sed velit odio. Nullam lorem lectus, consectetur ornare enim ac, condimentum finibus ipsum. Cras bibendum, leo non auctor tristique, augue nisl eleifend libero, vel pellentesque diam urna non tellus. </p>
        </div>

        <div>
            <Link to="/">Back</Link>
        </div>

    </div>
    
    
    

  </Layout>
)

export default ExplorePlant
