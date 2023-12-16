import React from 'react'
import styled from 'styled-components'
import { useContext,useState } from 'react'
import {useNavigate} from "react-router-dom"
import { UserContext } from '../App'
import { keyframes } from 'styled-components';
import { Outlet, Link } from "react-router-dom";
import {app} from '../firebase-config';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



const LoginPage=styled.div`
  height: 60vh;
  width: 80%;
  margin: auto auto;
  margin-top: 20px;
  background-color:${props => props.mode.bacgroundColor};
  box-shadow: 0 15px 25px 0 ${props=>props.mode.bodyBoxShadow}, 0 6px 20px 0 ${props=>props.mode.bodyBoxShadow};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius:25px ;
`
const UserBox=styled.div`
  position: relative;
  padding: 4px;
  z-index: 1;
  width: 100%;
`
const Label=styled.label`
  position: absolute;
  color: ${props => props.mode.colorLogin};
  top: 0px;
  left:0px;
  z-index: 100;
  transition: .5s;
  
`
const Form=styled.form`
  width: 80%;
  /* background-color: #222; */
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  /* border: 1px solid #fff; */
  /* overflow: hidden; */
`
const Input=styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  width:100%;
  border-bottom: 1px solid ${props => props.mode.colorLogin};
  color: ${props => props.mode.colorLogin};
  
  font-weight: bold;
  font-size: 18px;
  &:focus~Label{
    /* background-color: #fff; */
    /* color: #222; */
    top: -20px;
    color: #44CFCB;
    z-index: 0;
    /* position: fixed; */
  }

  /* :focus{
    border-bottom:1px solid #44CFCB ;
  }
  :checked~Label{
    color: red;
  } */
  &:valid~Label{
    top: -20px;
    color: #44CFCB;
  }
  
`
const H2=styled.h2`
  color: ${props => props.mode.colorLogin};
`
const A=styled.button`
  /* background-color: #44cfcb; */
  background-color: transparent;
  padding: 10px 20px;
  width: fit-content;
  border-radius: 5px;
  /* color: #122c34; */
  color: #44cfcb;
  text-transform: uppercase;
  text-decoration: none;
  /* font-weight: bold; */
  font-size: 16px;
  letter-spacing: 4px;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  &:hover{
    background-color: #44cfcb;
    color: #fff;
    box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4,
              0 0 50px #03e9f4,
              0 0 100px #03e9f4;
  }

  /* display: block; */
`
const btnAnimT=keyframes`
  0%{
    left:-100%

  }
  50%,100%{
    left: 100%;

  }
`
const SpanT=styled.span`
  position: absolute;
  top: 0px;
  left: 0px;
  display: block;
  height: 2px;
  width: 100%;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: ${btnAnimT} 1s linear infinite;
  animation-delay: .25s
`
const btnAnimR=keyframes`
  0%{
    top:-100%

  }
  50%,100%{
    top: 100%;

  }
`
const SpanR=styled.span`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 0.5px;
  /* color: #44cfcb; */
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: ${btnAnimR} 1s linear infinite;
  animation-delay: .25s
`
const btnAnimB=keyframes`
  0%{
    right:100%

  }
  50%,100%{
    left: -100%;

  }
`
const SpanB=styled.span`
position: absolute;
bottom: 0px;
left: 0px;
width: 0.5px;
/* color: #44cfcb; */
background: linear-gradient(270deg, transparent, #03e9f4);
height: 2px;
width: 100%;
animation: ${btnAnimB} 1s linear infinite;
animation-delay: .25s
`
const btnAnimL=keyframes`
  0%{
    bottom:-100%

  }
  50%,100%{
    bottom: 100%;

  }
`
const SpanL=styled.span`
position: absolute;
left: 0px;
width: 2px;
/* color: #44cfcb; */
/* background-color: #44cfcb; */
background: linear-gradient(360deg, transparent, #03e9f4);
height: 100%;
/* bottom: 0px; */
animation: ${btnAnimL} 1s linear infinite;
  animation-delay: .25s
`;
const v=()=>{
  console.log('jfvbfjbvbfbv')
}
const Login = () => {
  const user = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();


  const handleLogin = async (e) => {
    e.preventDefault();
    
    await signInWithEmailAndPassword(auth,email, password)
      // User is signed in
     .then((userCredential) => {
    // Signed in 
    const user1 = userCredential.user
    console.log(user1)
     localStorage.setItem(
         'User',
         JSON.stringify(user1))
    user[8](user1)
    navigate('/')
    // ...
  }).catch((error)=> {
      // Handle login errors
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorMessage)
      setError(errorMessage)
    });
  }

  return (
    <LoginPage mode={user[0]}>
        <H2 mode={user[0]}>Login</H2>
        <Form onSubmit={handleLogin}>
          <UserBox >
            <Input type='email' name='' required mode={user[0]} value={email}  onChange={(e) => setEmail(e.target.value)} ></Input>
              
            <Label mode={user[0]}>Email</Label>
          </UserBox>
          <UserBox >
            {/* <input type="password" name="" required=""> */}
            <Input type='password' name='' required mode={user[0]} value={password} onChange={(e)=> setPassword(e.target.value)} ></Input>
            <Label mode={user[0]}>Password</Label>
          </UserBox>
          <A type='submit'>
            <SpanT></SpanT>
            <SpanR></SpanR>
            <SpanB></SpanB>
            <SpanL></SpanL>
            Submit
          </A>
        </Form>
        {error}      
        <p> if you don't have account please <Link to='/SignUp'>Sign Up</Link> </p>
    </LoginPage>
  )
};

export default Login