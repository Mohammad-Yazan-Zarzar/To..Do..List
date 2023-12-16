import {styled} from 'styled-components'
import React from 'react'
import { useContext,useState } from 'react'
import { UserContext } from '../App'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
const HeadeStyle=styled.div`
    /* background-color: #49cafc; */
    background-color:${props => props.mode.HeadeBackgroundColor};
    background-image: linear-gradient(to right, ${props=>props.mode.HeadeBackgroundColorLeft}, ${props=>props.mode.HeadeBackgroundColorRight});

    width: 80%;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    color: ${props=>props.mode.HeadeColor};
    /* color: #fff; */
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;

`


const Heade = () => {
    const user = useContext(UserContext);

    // console.log(user)
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    var d = new Date();
    var y=d.getDate()
    var m=monthNames[d.getMonth()]
    var dayName = days[d.getDay()];
    return (
    <HeadeStyle mode={user[0]}>
        <p>
            {y} {m} , {dayName}
        </p> 
        
        {/* {user} */}
    </HeadeStyle>
  )
}

export default Heade