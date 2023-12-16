import React from 'react'
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import { TimeField } from '@mui/x-date-pickers';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { useState,useEffect } from 'react';
import { AddTask, LinkRounded } from '@mui/icons-material';
import { useContext} from 'react'
import { UserContext } from '../App'
import { Outlet, Link,useNavigate } from "react-router-dom";
// import { UserContext } from '../App'



const FormAddStyle=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 10px;
  width: 100%;
  /* width: initial; */
  /* background-color: #222; */
`
const TextFieldStyle=styled(TextField)`
  width: 90% !important;
  
`
const FormStyle=styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  /* justify-content: center; */
  align-items: center;
  gap: 50px;
  /* background-color: #222; */
`
const TimePartStyle=styled.div`
    display: flex;
    width: 90%;
    gap: 20px;
    border-bottom: 1px solid ;
    position: relative;
    text-align: start;
    justify-content: start;
    align-items: start;
    padding: 5px;
    overflow-x: hidden;
    &:hover{
      /* background-color: #222; */
      /* border-bottom: 2px solid ${props=>props.mode.HeadeBackgroundColorRiht}; */
      border-bottom: 2px solid #111;


    }

`

const Label=styled.label`
  /* position: absolute; */
  width: 60%;
  transition: .5s;
  cursor: pointer;



`
const InputTime=styled.input`
    outline: none;
    border: none;
    /* width: 50%; */
    cursor: pointer;
    background-color: transparent;
    &:active~Label{
      border: 1px solid #222;
      position: absolute;
      top: -20px;
  }
`
const ButtonStyle=styled.button`
    width: 100px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #fff;
    color: ${props=>props.mode.HeadeBackgroundColorRight};
    border: 1px solid ${props=>props.mode.HeadeBackgroundColorRight};
    border-radius: 5px;
    transition: 0.2s;
    cursor: pointer;
    font-weight: bold;
    &:hover{
    background-image: linear-gradient(to right, ${props=>props.mode.HeadeBackgroundColorLeft}, ${props=>props.mode.HeadeBackgroundColorRight});
    color: #fff;
    border: none;
    box-shadow: 0 4px 8px 0 ${props=>props.mode.bodyBoxShadow}, 0 6px 20px 0 ${props=>props.mode.bodyBoxShadow};

    }
`
const FormAdd = () => {
  const user = useContext(UserContext);
  const [taskText,setTaskText]=useState('')
  const [taskTime,setTaskTime]=useState('')
  const [taskId,setTaskId]=useState(0)

  const navigate = useNavigate();

  
  // const addTask=()=>{
  //   // preventDefault()
  //   // console.log('submit')
  //   // user[0]()
  //   if(user[1]!=null){
  //     user[2]([...user[1],{taskText,taskTime}])

  //   }
  //   else{
  //     user[2]([{taskText,taskTime}])


  //   }
    
  // }
  

  return (
    <FormAddStyle onSubmit={(e)=>{
      e.preventDefault()
      
      // console.log(user[1].length)
      console.log(taskId)
      user[3](taskText,taskTime,taskId)
      navigate('/');

      // console.log(user[1])

      }}>

        <h3>Add New Task </h3>
        <FormStyle>
          <TextFieldStyle  id="standard-basic" label="Task" variant="standard"required 
          name='taskText' value={taskText} onChange={(e)=>{
            setTaskText(e.target.value)
            if(user[1]!==null){
              setTaskId(user[1].length+1)
              
              // console.log('Yes')
      
            }else{
              setTaskId(1)
              // console.log('No')
      
            }
            // console.log(e.target.value)
            }}/>
          <TimePartStyle mode={user[0]}>
            <Label htmlFor="time" >Task Time :</Label>
            <InputTime id="time" type='time' value={taskTime} name='taskTime' onChange={(e)=>{
              setTaskTime(e.target.value)
            }} ></InputTime>

          </TimePartStyle>
          {/* <Fab variant="extended" size="small" color="primary">
            <NavigationIcon sx={{ mr: 1 }} />
            Extended
          </Fab> */}
          {/* <Link  to='/'> */}
            <ButtonStyle type='submit' mode={user[0]} >Add</ButtonStyle>

          {/* </Link> */}
        </FormStyle>
    </FormAddStyle>
  )
}

export default FormAdd