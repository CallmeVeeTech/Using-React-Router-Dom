import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <Container>
        <Wrapper>
            <Avatar src="/Assets/logo.jpg"/>
            <Navigation>
                <Nav to="/">Home</Nav>
                <Nav to="/about">About</Nav>
                <Nav to="/register">Sign Up</Nav>
                {/* <Nav to="login">Login</Nav> */}
            </Navigation>
        </Wrapper>
    </Container>
  )
}

export default Header

const Container =styled.div`
width: 100%;
height: 80px;
background-color: #004080;
display: flex;
align-items: center;
`
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
margin: 20px;
`
const Avatar = styled.img`
width: 60px;
height: 60px;
border-radius: 50%;
background-color: white;
object-fit: cover;
margin-left: 20px;
border: 4px solid white;
`
const Navigation = styled.div`
display: flex;

`
const Nav = styled(Link)`
text-decoration: none;
padding: 15px 30px;
background-color: white;
margin: 0 10px;
border-radius: 2px;
text-transform: uppercase;
font-weight: 600;
font-size: 13px;
color: black;
transition: all 350ms;
:hover{
    cursor: pointer;
    transform: scale(1.03);
}
`
