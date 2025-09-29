import React from 'react'
import { useNavigate,useLocation,useParams } from 'react-router-dom'


import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { baseUrlFrontend } from '../frontend-url'
import { developerregister } from '../redux/actions/developer'
function Register() {
  const [name, setname] = useState("")
  const [surname, setsurname] = useState("")
  const [email, setEmail] = useState("")

  const [confirmPassword, setconfirmPassword] = useState("")
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const devRegister = useSelector(state => state.devSignup);
  const {devInfo,loading,error}=devRegister ;
const formatPhoneNumber=(value)=>{
  const digits = value.replace(/\D/g,'');
  let cleaned= digits.startsWith("263") ? digits.slice(3)  : digits;
  const parts=[];
  if (cleaned.length>0) {
    parts.push(cleaned.slice(0,3))
  }
  if (cleaned.length>3) {
    parts.push(cleaned.slice(3,6))
  }
  if (cleaned.length>6) {
    parts.push(cleaned.slice(6,9))
  }
  return `+263 ${parts.join(' ')}`
}



  function developerRegister(e) {
      e.preventDefault();
      if (confirmPassword !== password) {
        alert("Passwords are not matching")
      }
    
        dispatch(developerregister(email,phone,password,name,surname));
    
      }
      useEffect(() => {
          if (devInfo) {
           
            //navigate("/home")
            window.location.replace(`${baseUrlFrontend}/home`)
            
          }
      
          return () => {
            //
          };
          
         }, [devInfo,navigate])



      
  return (
<div class="container-xxl">
      <div class="authentication-wrapper authentication-basic container-p-y">
      <div class="authentication-inner">
       
        <div class="card">
          <div class="card-body">
           
            <div  class="app-brand justify-content-center">
              <a href="index.html" class="app-brand-link gap-2">
                <span class="app-brand-logo demo">
               
                </span>
                <span class="app-brand-text demo text-body fw-bolder">Bidfirst</span>
              </a>
            </div>
         
            <h4  style={{
              marginTop:"1rem"
            }} class="mb-2">Welcome to Bidfirst 👋</h4>
            <p class="mb-4">Please sign-up to your account and start the adventure</p>

            <form id="formAuthentication" class="mb-3" action="index.html" method="POST">
              <div class="mb-3">
                <label for="email" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  name="email-username"
                  placeholder="Enter your name"
                  autofocus
                  onChange={(e)=>setname(e.target.value)}
                  value={name}
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Surname</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  name="email-username"
                  placeholder="Enter your surname"
                  autofocus
                  onChange={(e)=>setsurname(e.target.value)}
                  value={surname}
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  name="email-username"
                  placeholder="Enter your email or username"
                  autofocus
                  onChange={(e)=>setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Phone Number</label>
                <input
                  type="tel"
                  class="form-control"
                  id="text"
                  name="email-username"
                  placeholder="Enter your phone number"
                  autofocus
                  onChange={(e)=>setphone(formatPhoneNumber(e.target.value))}
                  value={phone}
                />
              </div>
              <div class="mb-3 form-password-toggle">
                <div class="d-flex justify-content-between">
                  <label class="form-label" for="password">Password</label>
             
                </div>
                <div class="input-group input-group-merge">
                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    name="password"
                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                    aria-describedby="password"
                    onChange={(e)=>setpassword(e.target.value)}
                    value={password}
                  />
                  <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                </div>
              </div>
              <div class="mb-3 form-password-toggle">
                <div class="d-flex justify-content-between">
                  <label class="form-label" for="password">Confirm Password</label>
              
                </div>
                <div class="input-group input-group-merge">
                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    name="password"
                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                    aria-describedby="password"
                    onChange={(e)=>setconfirmPassword(e.target.value)}
                    value={confirmPassword}
                  />
                  <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                </div>
              </div>
           
              <div class="mb-3">
                <button class="btn btn-primary d-grid w-100" onClick={developerRegister}>Sign up</button>
              </div>
            </form>

            <p class="text-center">
              <span>Already registered ? </span>
              <Link to="/login" >
                <span>login</span>
              </Link>
            </p>
          </div>
        </div>
        
      </div>
      </div>

      </div>


  )
}

export default Register