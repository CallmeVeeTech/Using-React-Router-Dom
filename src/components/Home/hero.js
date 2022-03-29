import React from 'react'
import styled from 'styled-components'


const Hero = () => {
  return (
    <Container>
        <Text>Welcome</Text>
        <Name>Veekta</Name>
    </Container>
  )
}

export default Hero;
const Container = styled.div`
width: 100%;
height: 600px;
background: url('/Assets/hero.jpg');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Text = styled.div`
color: black
`
const Name = styled.div`
font-weight: bold;
font-size: 60px;
text-transform: uppercase;
color: black;
`