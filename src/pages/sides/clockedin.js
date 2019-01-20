import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'

const ClockedIn = () => (
  <Layout>
    <div>
        <div>
            <h2>CLO:CK:ED:IN</h2>
        </div>
        <div className='desc'>
            <h4>Problem</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar dolor vel libero scelerisque, non tristique erat tristique. Integer sed velit odio. Nullam lorem lectus, consectetur ornare enim ac, condimentum finibus ipsum. Cras bibendum, leo non auctor tristique, augue nisl eleifend libero, vel pellentesque diam urna non tellus. </p>
        </div>
        <div className='desc'>
            <h4>Solution</h4>
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

export default ClockedIn
