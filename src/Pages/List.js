import React from 'react'
import Heade from '../components/Heade'
import Body from '../components/Body'
import styled from 'styled-components'

const ListStyle=styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const List = () => {
  return (
    <ListStyle>
        <Heade></Heade>
        <Body></Body>
    </ListStyle>
  )
}

export default List