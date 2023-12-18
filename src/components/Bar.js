import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext,useState,useEffect } from 'react'
import { UserContext } from '../App'
import { Outlet, Link, json } from "react-router-dom";
import ss from '../images/logoToDoList.png'
import styled from 'styled-components';
import MaterialUISwitch from './switch';

const BoxStyle=styled(Box)`
    width: 100% !important;
    /* max-height: 8px !important; */
    margin-bottom: 14px !important;
    border-bottom-right-radius: 5px !important;
    border-bottom-left-radius: 5px !important;
    /* margin: 0 !important; */
    /* overflow-y: hidden; */
    /* background-color: azure !important; */
`
const AppBarStyle=styled(AppBar)`
    background-image: linear-gradient(to right, ${props=>props.mode.HeadeBackgroundColorLeft}, ${props=>props.mode.HeadeBackgroundColorRight})!important;
    z-index: -1;
    /* position: relative; */
    border-bottom-right-radius: 5px !important;
    border-bottom-left-radius: 5px !important;
    max-height: 55px !important;
   box-shadow: 0 1px 2px 0 ${props=>props.mode.bodyBoxShadow}, 0 3px 10px 0 ${props=>props.mode.bodyBoxShadow} !important;
    
    /* overflow-y: hidden; */



    /* overflow-y: hidden; */

`
const LinkStyle=styled(Link)`
    color: inherit;
    text-decoration: none;

`
const MenueStyle=styled.div`
  /* background-color: #fff; */
  color: blue;
  flex-direction: column;
  /* z-index:2; */
  /* position:absolute; */
  bottom:-50px;
  left:-50px;
  padding:10px;
  /* border-top-left-radius:20px; */
  /* transform:5s; */
  display:${props=>props.mode};

  transition:0.2s ;
  
 
  
`
const Avatar=styled.div`
  width: 40px;
  height: 40px;
  /* padding: 5px 5px; */
  background-color:${props=>props.mode.bodyBackgroundColor} ;
  color: ${props=>props.mode.colorLogin};
  font-weight:bold;
  font-size:25px;
  text-transform:uppercase ;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 ${props=>props.mode.bodyBoxShadow}, 0 6px 20px 0 ${props=>props.mode.bodyBoxShadow};
  cursor: pointer;
  position:relative;
  z-index: 0;
  


`
const AccountBtn=styled.div`
  display: flex;
  flex-direction:column;
  padding: 2px;

  /* position: relative; */
  /* border:2px solid black; */
  z-index: 2;
  position: absolute;
  right: 20px;
  top:10%;
  align-items: center;
  justify-content:center;
  border-radius:5px;
  background-color: ${props=>props.mode2};
  box-shadow: ${props=>props.mode};

  /* translate:10s; */
  transition:0.2s;
  

`
const ImgStyle=styled.img`
  max-height:45px;
  
`

export default function ButtonAppBar() {
    const user = useContext(UserContext);
   const[display,setDisplaye]=useState('none')
   const[accountStyle,setAccountStyle]=useState(user[0].accountBackGround)
   const[accountShadow,setAccountShadow]=useState('none')

  return (
    <>
    <BoxStyle sx={{ flexGrow: 1 }} >
      <AppBarStyle position="static" mode={user[0]}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <LinkStyle to='/'> <ImgStyle src={ss}></ImgStyle> </LinkStyle>
           {/* <img src='../images/logoToDoList.png' alt='NEWS'></img>  */}
           {/* <img src='../im' ></img> */}
          </Typography>
          {(user[7]!==null && user[7]!=='')?
          // <span>{user[7]["email"]}</span>
          <AccountBtn mode2={accountStyle} mode={accountShadow}>
            <Avatar mode={user[0]} className='Avatar' onClick={()=>{
              if(display==='flex'){
                setDisplaye('none')
              setAccountStyle('transparent')
                setAccountShadow('none')
              }
              
              else{
              setDisplaye('flex')
              setAccountStyle('#fff')
              setAccountShadow('0 4px 8px 0 #fff, 0 6px 20px 0 #fff')

              }
              }}>
              {user[7]["email"][0]}
            </Avatar>
            <MenueStyle mode={display}>
              <MaterialUISwitch onClick={user[10]}></MaterialUISwitch>
              <div>Logout</div>


            </MenueStyle>
          </AccountBtn>
        
          :<LinkStyle to="/Login" > <Button color="inherit">Login</Button></LinkStyle>
          }
        </Toolbar>
      </AppBarStyle>
    </BoxStyle>
    <br></br>
    <Outlet></Outlet>
    </>

  );
}
