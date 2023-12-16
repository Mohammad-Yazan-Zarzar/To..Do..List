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

const BoxStyle=styled(Box)`
    width: 100% !important;
    height: 10px !important;
    margin-bottom: 50px !important;
    /* background-color: azure !important; */
`
const AppBarStyle=styled(AppBar)`
    background-image: linear-gradient(to right, ${props=>props.mode.HeadeBackgroundColorLeft}, ${props=>props.mode.HeadeBackgroundColorRight})!important;

`
const LinkStyle=styled(Link)`
    color: inherit;
    text-decoration: none;

`
export default function ButtonAppBar() {
    const user = useContext(UserContext);
    // const [account,setAccount]=useState('')
    // useEffect(()=>{
      
    //   const account1 =localStorage.getItem('User')
    //   const account2 =JSON.parse(account1)

    //   console.log(account2)
    //   setAccount(account2)
    // },[])
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
           <LinkStyle to='/'> <img src={ss}></img> </LinkStyle>
           {/* <img src='../images/logoToDoList.png' alt='NEWS'></img>  */}
           {/* <img src='../im' ></img> */}
          </Typography>
          {(user[7]!==null && user[7]!=='')?<span>{user[7]["email"]}</span>:
            <LinkStyle to="/Login" > <Button color="inherit">Login</Button></LinkStyle>
          }
        </Toolbar>
      </AppBarStyle>
    </BoxStyle>
    <br></br>
    <Outlet></Outlet>
    </>

  );
}
