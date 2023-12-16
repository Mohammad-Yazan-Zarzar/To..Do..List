import React from 'react'
import Task from './Task'
import { useContext,useState,useEffect } from 'react'
import { UserContext } from '../App'
import styled from 'styled-components'
import Loader from './Loader'

const MessageStyle=styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #222; */


`
const TasksGroupStyle=styled.div`
  margin-bottom: 5px;
  /* overflow-y: scroll; */
  
  overflow-x: hidden;
  max-width: 100%;
  height: 50vh;


`
const LoaderStyle=styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Tasks = () => {
  const user = useContext(UserContext);
  // useEffect(()=>{
  //     console.log(user[1])
  //     localStorage.setItem(
  //       'tasks',
  //       JSON.stringify(user[1]))
  //     // console.log(JSON.parse(localStorage.getItem('tasks')))

  // },[])
  if(user[5]){
    return <LoaderStyle>
        <Loader></Loader>
      </LoaderStyle>
  }
  if (user[1]!=null && user[1].length!=0 ){
    return (
      <TasksGroupStyle>
        {/* <Loader></Loader> */}
        {user[1].map((task,id)=>(
          <Task key={id} task={task} ></Task>
  
        ))}
          {/* <Task></Task> */}
  
      </TasksGroupStyle>
    )

  }
  else{
    return(
        <MessageStyle> 
          <p>No Any Tasks Yet  </p>
        </MessageStyle>

    )
    
  }

 
}

export default Tasks