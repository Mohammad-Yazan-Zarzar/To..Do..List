import React from 'react'
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';
import styled from 'styled-components';
import { FcOk } from 'react-icons/fc';
import { MdDeleteOutline } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { useState,useEffect } from 'react';
import { useContext} from 'react'
import { UserContext } from '../App'


const GroupStyle=styled.div`
    display: flex;
    /* background-color: blue; */
    position: relative;
`
const DoneButton=styled(IconButton)`
    position: absolute !important;
    left:-40px !important;
    z-index: 2 !important;

    /* background-color: blue !important; */

`
const DeleteButton=styled(IconButton)`
    position: absolute !important;
    bottom: -40px !important;
    /* left: 0px; */
    z-index: 2 !important;
    /* background-color: red !important; */
    translate: 0.5s !important;
    color: red !important;


`
const CloseButton=styled(IconButton)`
    /* position: relative; */
    /* z-index: -1; */
    /* bottom: -2px; */
    z-index: 1;
    &:active ~ ${DeleteButton}{
        /* background-color: green !important; */
    }
`

const GroupButton = (props) => {
  const user = useContext(UserContext);

    const [more,setMore]=useState('more')
    useEffect(()=>{
        setMore('more')
    },[])
    
    if(more==='more'){
        return(
              <IconButton color="inherit" onClick={()=>setMore('')}>
                <MoreIcon />
            </IconButton>

        )
    }
    else{
    return (
  
        <GroupStyle>
            <CloseButton onClick={()=>{setMore('more')}}>
                <AiOutlineClose></AiOutlineClose>
            </CloseButton>
            <DoneButton onClick={()=>{
                user[9](props.taskId)
                props.setLine('line-through')
                setMore('more')

            }}>
                <FcOk></FcOk>
            </DoneButton>
            <DeleteButton onClick={()=>{
                console.log('id',props.taskId)
                user[4](props.taskId)
                setMore('more')

            }}>
                <MdDeleteOutline></MdDeleteOutline>
            </DeleteButton>
        </GroupStyle>
       
      )

}
 
}

export default GroupButton