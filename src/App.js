import React from 'react'
import styled from 'styled-components';
import Heade from "./components/Heade";
import Body from './components/Body';
import  Login  from './components/Login';
import Bar from './components/Bar'
import Footer from './components/Footer'
import { lightMode } from './Theme';
import { useState,createContext, useContext ,useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {db} from './firebase-config';
import{collection,addDoc,getDocs,query,where,deleteDoc,doc,updateDoc} from "@firebase/firestore"
import List from './Pages/List'
import FormAdd from './components/FormAdd';
import SignUp from './components/SignUp';
import { SignalCellularNull } from '@mui/icons-material';
const AppStyle=styled.div`
  background-color:${props => props.mode.bacgroundColor};
  height: 100vh;
  display: flex;
  /* gap: 5px; */
  flex-direction: column;
  justify-content: space-around;
  color: ${props=>props.mode.color};
  /* justify-content: center; */
  align-items: center;
  overflow-x: hidden;
`
// CreateContext
 export const UserContext = createContext();
// -----------
function App() {
  // //////////////
  const UsersCollectionRef = collection(db, "backenddata")
/////////////////////////
  const [pageMode,setPageMode]=useState(lightMode)
  const [tasks,setTasks]=useState(JSON.parse(localStorage.getItem('tasks')))
  const [runLoader,setRunLoader]=useState(true)
  const [account,setAccount]=useState(JSON.parse(localStorage.getItem('User'))||'')
  // const [uid,setUid]=useState('')

  
  
  // const[st,useSt]=useState('Hello')
  // useEffect(()=>{
  //   const userTasks =localStorage.getItem('tasks')
  useEffect(() => {
    setRunLoader(true)
    
    const getUsersData = async () => {
      
      const q=query(UsersCollectionRef,where("uid","==",account['uid']||''))
      const data = await getDocs(q)
      // console.log(data.docs)
      setTasks(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })))
      setRunLoader(false)

    }

    getUsersData()
    console.log(account['uid'])
    console.log(account)
    console.log(tasks)

}, [])

useEffect(() => {
  setRunLoader(true)
  
  const getUsersData = async () => {
    
    const q=query(UsersCollectionRef,where("uid","==",account['uid']||''))
    const data = await getDocs(q)
    // console.log(data.docs)
    setTasks(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })))
    setRunLoader(false)

  }

  getUsersData()
  console.log(account['uid'])
  console.log(account)
  console.log(tasks)

}, [account])
    
  //   const userTasksParsed = JSON.parse(userTasks)
  //   console.log(userTasksParsed)
  //   setTasks(userTasksParsed)
  // },[])
  const addTask=async(taskText,taskTime,taskID)=>{
    // preventDefault()
    // console.log('submit')
    // user[0]()
    if(tasks!=null){
      // let taskID=tasks.length+1

      setTasks([...tasks,{taskID,taskText,taskTime}])

    }
    else{
      setTasks([{taskText,taskTime,taskID}])


    }
    if(account!=null){
      const uid=account['uid']
      const taskStatus=''
      await addDoc(UsersCollectionRef, {taskID,taskText,taskTime,taskStatus,uid})


    }
    // window.location.reload()
    // console.log(user[1])
      // localStorage.setItem(
      //   'tasks',
      //   JSON.stringify(tasks))
      // console.log(JSON.parse(localStorage.getItem('tasks')))
    
  }
  const deleteTask=async(taskID)=>{
    console.log(tasks)
    setTasks(tasks.filter(task=>task.id!=taskID))
    // const q1=query(UsersCollectionRef,where("taskId","==", toString(taskID)))
    

    await deleteDoc(doc(db,"backenddata",taskID))

    console.log(taskID)
  }
  const updateTask=async(taskID)=>{
    // console.log(tasks)
    // setTasks(tasks.filter(task=>task.id!=taskID))
    // const q1=query(UsersCollectionRef,where("taskId","==", toString(taskID)))
    

    await updateDoc(doc(db,"backenddata",taskID),{
      taskStatus:'done'
    })

    console.log('Done',taskID)
  }
 

  return (
    <UserContext.Provider value={[pageMode ,tasks,setTasks,addTask,deleteTask,runLoader,setRunLoader,account,setAccount,updateTask]}>
      <AppStyle mode={pageMode}>
      <BrowserRouter>
          <Bar></Bar>

          <Routes>
          <Route path="List" element={<List />} />
          <Route path="Login" element={<Login/>} />
          <Route path="SignUp" element={<SignUp/>} />

          <Route path="/" element={<List/>}>
              
              {/* <Route index element={<List />} /> */}
              <Route path="Add" element={<FormAdd/>} />
          </Route>
          </Routes>
        
          <Footer></Footer>
          

        </BrowserRouter>
        
        {/* <List></List> */}
      </AppStyle>
    </UserContext.Provider>
    
  );
}

export default App;
