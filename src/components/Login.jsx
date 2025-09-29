import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import useData from './useData'
import {developersignin} from "../redux/actions/developer"
import {adminsignin} from "../redux/actions/admin"
import {getusers} from "../redux/actions/admin"
import { baseUrlFrontend } from '../frontend-url'
import { Link } from 'react-router-dom'
function Login() {
  const [email, setEmail] = useState("")
  const {getUserData,getUserError,getUserloading}=useData()
const [showPassword, setshowPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [errorMessage,setErrorMessage]=useState('');
  const dispatch=useDispatch()
  let users=useSelector((state)=>state.getUsers);

  let devLogin=useSelector((state)=>state.devSignin);
  let adminLogin=useSelector((state)=>state.adminSignin);
 
  const {loading,error,devInfo}=devLogin;

  const binarySearch=(arr,targetEmail)=>{

    arr?.sort((a,b)=>a.email.localeCompare(b.email));
 let left=0;
 let right=arr?.length-1   
 while(left<=right){
let mid= Math.floor((left+right)/2);
let comparison=arr[mid].email.localeCompare(targetEmail);
if (comparison===0) {
return arr[mid]
}else if(comparison<0){
left=mid+1;
}else{
right=mid-1
}

}}
let user=binarySearch(getUserData,email)
console.log(user);
const signin=(e)=>{
  e.preventDefault();
let role= user?.role;

if (role==="Exec") {
  dispatch(developersignin(email,password))
} 
else if(role==="Admin"){
dispatch(adminsignin(email,password))
}
else if(role===undefined){
console.log("error");
}





  
     }
 console.log(adminLogin);
     useEffect(()=>{
      dispatch(getusers())
      if (error) {
  
        let errorInformation=error ;
        setErrorMessage(errorInformation)
        setTimeout(()=>{
          setErrorMessage('')
        },3000)
        }       
     
      if (adminLogin.error) {
  console.log("hello world");
        let errorInformation=adminLogin.error ;
        console.log(errorInformation);
        setErrorMessage(errorInformation)
        setTimeout(()=>{
          setErrorMessage('')
        },3000)
        }      
     
        
         
      
             },[dispatch,error,adminLogin.error])


             useEffect(()=>{
              if (devInfo) {
      
               window.location.replace(`${baseUrlFrontend}/home`)
              }
              if (adminLogin.adminInfo) {
                window.location.replace(`${baseUrlFrontend}/home`)
              }
             },[devInfo,dispatch,adminLogin.adminInfo])
      
          

  return (
<div class="container-xxl">
      <div class="authentication-wrapper authentication-basic container-p-y">
      <div class="authentication-inner">
       
        <div class="card">
          <div class="card-body">
           
            <div class="app-brand justify-content-center">
              <a href="index.html" class="app-brand-link gap-2">
                <span class="app-brand-logo demo">
               
                </span>
                <span class="app-brand-text demo text-body fw-bolder">Bidfirst</span>
              </a>
            </div>
         
            <h4 class="mb-2">Welcome to Bidfirst 👋</h4>
            <p class="mb-4">Please sign-in to your account and start the adventure</p>
            {

            }
<p style={{
  color:"red"
}}>
{
  errorMessage
}
</p>
{
  loading && <p >
Loading.....
  </p>
}

{
 adminLogin.loading && <p >
Loading.....
  </p>
}



            <form id="formAuthentication" class="mb-3" onSubmit={signin}>
              <div class="mb-3">
                <label for="email" class="form-label">Email </label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  name="email-username"
                  placeholder="Enter your email or username"
                  autofocus
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div class="mb-3 form-password-toggle">
                <div class="d-flex justify-content-between">
                  <label class="form-label" for="password">Password</label>
                  <a href="auth-forgot-password-basic.html">
                    <small>Forgot Password?</small>
                  </a>
                </div>
                <div class="input-group input-group-merge">
                  <input
                    type={showPassword ? "text" : "password"} 
                    id="password"
                    class="form-control"
                    name="password"
                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                    aria-describedby="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                  />

                  <span onClick={()=>setshowPassword(!showPassword)} class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                </div>
              </div>
            
              <div class="mb-3">
                <button class="btn btn-primary d-grid w-100" type="submit">Sign in</button>
              </div>
            </form>

            <p class="text-center">
              <span>New on our platform?</span>
              <Link to="/register">
                <span>Create an account</span>
              </Link>
            </p>
          </div>
        </div>
        
      </div>
      </div>

      </div>


  )
}

export default Login