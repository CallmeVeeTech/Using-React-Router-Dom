import React from 'react'
import styled from 'styled-components'
import Content from './Contents'

const About = () => {
  return (
    <Container>
        <Wrapper>
            <Image src="Assets/abouthero.jpg"/>
           <Content title="Dynamics" text="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."/>
           <Content title="Adventure" text="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."/>
        </Wrapper>
    </Container>
  )
}
export default About

const Container = styled.div`
width: 100%;
height: 100%;
min-height: calc(100vh - 80px);
display: flex;
justify-content: center;
background-color: lightgray;
`
const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column ;
align-items: center;
`
const Image = styled.img`
/* margin: 40px 0; */
width: 100%;
height: 700px;
object-fit: cover;
`
