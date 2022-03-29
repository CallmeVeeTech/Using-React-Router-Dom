import React from 'react'
import styled from 'styled-components'
import Header from './components/header/header'
import Home from './components/Home/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/pages/about'
import Detail from './components/pages/detail'
import Register from './components/pages/register'
import Signin from './components/pages/signin'

const App = () => {
  return (
    <Container>
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/signup" element={<Signin/>}/>
        </Routes>
        </BrowserRouter>
    </Container>
  )
}

export default App

const Container = styled.div`
width: 100%;
`