import React from 'react'
import styled from 'styled-components'
import { useContext,useState,useEffect } from 'react'
import { UserContext } from '../App'
import Task from './Task'
import Tasks from './Tasks'
import BottomBar from './BottomBar'
import FormAdd from './FormAdd'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const BodyStyle=styled.div`
    background-color: ${props=>props.mode.bodyBackgroundColor};
    width: 80%;
    display:flex;
    flex-direction: column;
    min-height: 58vh;
    max-height: 58vh;

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0 4px 8px 0 ${props=>props.mode.bodyBoxShadow}, 0 6px 20px 0 ${props=>props.mode.bodyBoxShadow};
    position: relative;
    overflow-x: hidden;
    /* overflow-y: hidden; */
    margin-bottom: 10px;
`
const Body = () => {
    const user = useContext(UserContext);
  //   useEffect(()=>{
  
  //     localStorage.setItem(
  //       'tasks',
  //       JSON.stringify(user[1]),
  //     );

    
  // },user[1])
  

  return (
    <BodyStyle mode={user[0]}>
        
        {/* <Task></Task>
        <Task></Task> */}
        {/* <Tasks></Tasks> */}
        {/* <BrowserRouter> */}
          <Routes>
          {/* <Route path="/List" element={<BottomBar/>}> */}
            <Route index element={<Tasks />} />
              <Route path="/List/Add" element={<FormAdd />} />
              <Route path="/List/Tasks" element={<Tasks/>} />

              {/* <Route path="Tasks" element={<Tasks/>} /> */}

              {/* <Route path="contact" element={<Contact />} /> */}
              {/* <Route path="*" element={<NoPage />} /> */}
            {/* </Route> */}
         </Routes>
          <BottomBar></BottomBar>

         {/* </BrowserRouter> */}
        

    </BodyStyle>
  )
}

export default Body