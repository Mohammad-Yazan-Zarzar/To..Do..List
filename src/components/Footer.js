import React from 'react'
import styled from 'styled-components'
import { BsFacebook } from "react-icons/bs";
import { BsTelephoneForward } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { useContext,useState } from 'react'
import { UserContext } from '../App'


const FooterStyle=styled.div`
  /* background-image: linear-gradient(to right, ${props=>props.mode.HeadeBackgroundColorLeft}, ${props=>props.mode.HeadeBackgroundColorRight})!important; */
  /* color: var(--mainColor); */
  /* color: #fff; */
  color: ${props => props.mode.colorLogin};
  
  padding: 5px;
  text-align: center;
  position: static;
  width: 100%;
  bottom: 0px;
  overflow-x: hidden;
  overflow-y: hidden;

  /* position: absolute; */
  /* bottom: 0px; */
  /* margin-top: 50px; */
`
const Links=styled.div`
  display: flex;
  gap: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
`
const Link=styled.a`
    text-decoration: none;
    /* color: var(--mainColor); */
    color: ${props => props.mode.colorLogin};

    :hover{
      cursor: pointer;
      color: var(--mainColor);
      
    }
`
const Footer = () => {
  const user = useContext(UserContext);

  return (
    <FooterStyle mode={user[0]}>
      <div className='row container'>
        <div className='col-12 col-md-6'>
          <h5>contact us</h5>
          <Links>
            <Link mode={user[0]} href='https://www.facebook.com/yzane.zarzar' ><BsFacebook></BsFacebook></Link>
            <Link mode={user[0]} href="mailto:yazanzarzar98@gmail.com?subject='subject text'"><GrMail></GrMail></Link>
            <Link mode={user[0]} href="tel:963981386862"><BsTelephoneForward></BsTelephoneForward></Link>
          </Links>
        </div>
        <div className='col-12 col-md-6'>
          <h5>We hope you have a great experience</h5>
        </div>

      </div>
    </FooterStyle>
  )
}

export default Footer