import React from 'react'
import data from '../data.json'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const View = () => {
  return (
    <Container>
        <Wrapper>
            {
                data?.map((props)=>(
            <Card key={props.id} to={`/detail/${props.id1}`} onClick={()=>{
                console.log(`this is the ID for this card: ${props.id}`)
            }}>
                <Image src={props.cardImg}/>
            </Card>
                ))
            }
        </Wrapper>
    </Container>
  )
}

export default View;

const Container = styled.div`
width: 100%;
margin-top: 60px;
`
const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const Card = styled(Link)`
overflow: hidden;
width: 400px;
height: 350px;
border-radius: 5px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
margin: 10px;
transform: scale(1);
transition: all 350ms;
:hover{
    transform: scale(0.98);
    cursor: pointer;
}
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

`