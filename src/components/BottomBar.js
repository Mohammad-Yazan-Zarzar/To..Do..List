import {styled} from 'styled-components'
import React from 'react'
import { useContext,useState } from 'react'
import { UserContext } from '../App'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Outlet, Link } from "react-router-dom";
import FormAdd from './FormAdd';
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

import {BsArrowReturnLeft} from "react-icons/bs"

// import React from 'react'
const FabStyle=styled(Fab)`

    /* background-color: blue !important; */
    background-image: linear-gradient(to right, ${props=>props.mode.HeadeBackgroundColorLeft}, ${props=>props.mode.HeadeBackgroundColorRight})!important;
    color: ${props=>props.mode.HeadeColor} !important;
    /* display:none; */
    display: ${props=>props.display} !important;
    /* display: ${props=>props.mode.FormButton} !important; */

    

`
const BarStyle=styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: absolute !important;
    bottom: 4px;
    margin-top: 5px;
    /* background-color: #222; */
`

const BottomBar = () => {
    const user = useContext(UserContext);
    const [displayForm,setDisplayForm]=useState('flex')
    const [displayReturn,setDisplayReturn]=useState('none')


  return (
    <>
     <BarStyle>
      <Link to="Add">
        {/* <Link to='/Add'></Link> */}

        <FabStyle  aria-label="add" size="small" display={displayForm}  mode={user[0]} onClick={()=>{
          setDisplayForm('none')
          setDisplayReturn('flex')
        }}>
            <AddIcon />
        </FabStyle>
      </Link>
      <Link to="/">
        {/* <Link to='/Add'></Link> */}

        <FabStyle  aria-label="return" size="small" display={displayReturn}  mode={user[0]} onClick={()=>{
          setDisplayForm('flex')
          setDisplayReturn('none')

        }}>
            {/* <AddIcon /> */}
            <BsArrowReturnLeft></BsArrowReturnLeft>

        </FabStyle>
      </Link>


       
    </BarStyle>
    <Outlet />

    </>
   
  )
}

export default BottomBar