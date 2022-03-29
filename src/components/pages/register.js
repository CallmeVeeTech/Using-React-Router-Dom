import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Image src='/Assets/registerimg.jpg'/>
        <Box>Name</Box>
        <Box>Email</Box>
        <Box>Password</Box>
        <Signin to="/signup">Sign Up</Signin>
      </Wrapper>
    </Container>
  )
}

export default Register;

const Image = styled.img`
width: 70px;
height: 70px;
border-radius:100%;
margin-bottom: 50px;
margin-top: 50px;
object-fit: cover;
`
const Signin = styled(Link)`
height: 50px;
width: 150px;
background: lightblue;
border-radius:20px;
margin-top: 50px;
outline: none;
border: 2px solid black;
font-size: 20px;
text-decoration: none;
color: black;
display: flex;
align-items: center;
justify-content: center;
`
const Box = styled.div`
height: 50px;
width: 400px;
color: grey;
background: lightblue;
border-radius: 20px;
border: 2px solid black;
margin: 10px;
display: flex;
align-items: center;
/* padding: 12px 12px; */
`

const Container = styled.div`
width: 100%;
color: black;
height: 100%;
background-color: lightgray;
min-height: calc(100vh - 80px);
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div`
height: 600px;
width: 500px;
background-color: lightgray;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
display: flex;
align-items: center;
flex-direction: column;
`
