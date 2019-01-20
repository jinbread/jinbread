import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'

const ClockedIn = () => (
  <Layout>
    <div>
        <div>
            <h2>CLO:CK:ED:IN</h2>
        </div>

        <div>
            <h3>Get inside of the clock, fix the time paradox, and save the people locked in the clock</h3>   
        </div>


        <div className='desc'>
            <h4>Story</h4>
            <p>We invented a ”magic” clock because we wanted to have more time. But something went wrong, and the clock screwed up. We tried to fix it, but we accidentally attached the hours, minutes and seconds from each other.</p>

            <p>Since time goes so much faster inside the clock and we don’t have enough time to go in there again, we were asking for time astronauts to help us reset the time. We left some clues for the astronauts, so you have the chance to solve the problem.</p>
        </div>
        <div className='desc'>
            <h4>Challenge</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar dolor vel libero scelerisque, non tristique erat tristique. Integer sed velit odio. Nullam lorem lectus, consectetur ornare enim ac, condimentum finibus ipsum. Cras bibendum, leo non auctor tristique, augue nisl eleifend libero, vel pellentesque diam urna non tellus. </p>
        </div>
        <div>
            <Link to="/">Back</Link>
        </div>
    </div>
    
    
    

  </Layout>
)

export default ClockedIn
