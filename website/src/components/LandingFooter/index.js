import React from 'react'
import {Container, Header, LeftSection, MiddleSection, RightSection, Box} from './landingfooterstyle.js'
const LandingFooter = () => {
  return (
    <Container>
      <Box Name='Box'>
        <LeftSection>
          <Header>Cookie Policy</Header>
        </LeftSection>
        <MiddleSection>
          <Header>Terms and Conditions</Header>
        </MiddleSection>
        <RightSection>
          <Header>About</Header>
        </RightSection>

        
      </Box>
      
    </Container>
  )
}

export default LandingFooter;