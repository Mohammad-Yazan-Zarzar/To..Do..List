import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useContext,useState } from 'react'
import { UserContext } from '../App'
import GroupButton from './GroupButton'


const TaskStyle=styled.div`
    width:100%;
    min-height: 100px;
    /* padding: 5px; */
    /* border: solid 1px #222; */
    display: flex;
    /* flex-direction: column; */
    flex: 2 1 auto;

    justify-content:space-between;
    align-items: center;
    position: relative;
    z-index: 1;
    background-color: ${props=>props.mode.bacgroundColor};
    transition: 0.2s;
    /* padding-left: 2px; */
    /* padding-right: 2px; */
    /* overflow-wrap: break-word; */
    

  
    

    &:hover{
      /* border: blue solid 1px; */
      /* z-index: 1000; */
      border-left:4px solid ${props=>props.mode.HeadeBackgroundColorRight};
      /* width: 110%; */
      /* scale: 1.009; */
      /* box-shadow: 0 2px 4px 0 #222, 0 3px 10px 0 #222; */
      box-shadow: 0 4px 8px 0 ${props=>props.mode.bodyBoxShadow}, 0 6px 20px 0 ${props=>props.mode.bodyBoxShadow};

      z-index: 2;
      
      
      /* position: absolute; */
    }

    /* text-align: center; */
`
const TaskText=styled.div`
    /* align-items: center; */
    /* justify-content: center; */
    row-gap: 1px;
    /* background-color: #222; */
    max-width: 75%;
    display: flex;
    flex-direction: column;
    overflow-wrap: break-word;
    word-break: keep-all;
    padding-left: 10px;
    text-decoration:${props=>props.line};


    
    /* max-height: 30px; */
    /* transition: .5s; */
   
  

`
const TimeStyle=styled.p`
    font-size: 18px;
    font-weight: 400;
`
const TextStyle=styled.div`
    max-width:100%;
    font-weight: bold;
    font-size: 18px;
    word-wrap: keep-all;
    /* display: flexbox; */
    display: flex;
    align-items: center;
    transform: .5s;
    /* text-decoration: line-through; */
    /* text-decoration-color: ; */
    /* flex-wrap: wrap; */
    /* text-overflow: clip; */
    /* overflow-wrap: break-word; */
  
    /* background-color:#222; */
    overflow-x: hidden;
    /* text-overflow: clip; */
    

`
const Task = (props) => {
  const user = useContext(UserContext);
  const [line,setLine]=useState(props.task.taskStatus)
  useEffect(()=>{
    console.log('Status',props.task.taskStatus)
    // setLine(props.task.taskStatus)
  },[])

  return (
    <TaskStyle mode={user[0]}  >
      
        <TaskText line={props.task.taskStatus}>
            <TimeStyle>{props.task.taskTime}</TimeStyle>
            <TextStyle>{props.task.taskText}</TextStyle>

        </TaskText>
        <GroupButton taskId={props.task.id} setLine={setLine}></GroupButton>
        

    </TaskStyle>
  )
}

export default Task