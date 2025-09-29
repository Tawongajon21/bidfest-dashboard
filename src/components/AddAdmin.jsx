import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowLeft} from "react-icons/fa"
import { useDispatch,useSelector } from 'react-redux';
import { adminregister } from '../redux/actions/admin';
import { useState,useEffect } from 'react';
import { baseUrlFrontend } from '../frontend-url';
function AddAdmin({data:userData}) {
  let adminSignup=useSelector((state)=>state.adminSignup);

  console.log(adminSignup);
  console.log(userData);
 let signature=userData.signature
  const {loading,error,data}=adminSignup;
  const dispatch=useDispatch()
const [name, setname] = useState("")
const [surname, setsurname] = useState("")
const [phone, setphone] = useState("")
const [email, setemail] = useState("")
const [password, setpassword] = useState("")
const [confirmPassword, setconfirmPassword] = useState("")
const [errorMessage,setErrorMessage]=useState('');


const signup=(e)=>{
  e.preventDefault();
  if (password!==confirmPassword) {
  
      setErrorMessage("Passwords do not match")
      setTimeout(()=>{
          setErrorMessage('')
      },3000)
  }
  else if(error){
  
      setErrorMessage('error')
      setTimeout(()=>{
          setErrorMessage('')
      },3000)
  }
  else{
      dispatch(adminregister(email,phone,password,name,surname,signature))
  }
  
     }

     useEffect(()=>{
      if (data) {

     window.location.replace(`${baseUrlFrontend}/home/admins`)
 
  
   
      }
     
     },[data])
    
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
    
  return (
 

       <div class="content-wrapper">
 
       <div class="container-xxl flex-grow-1 container-p-y">
       <div style={{
  display:"flex",
  justifyContent:"space-between",
  alignContent:"center",
  alignItems:"center"
}}>
       <h4 class="fw-bold py-3 mb-4"> Add Admin</h4>

  <Link to="/home/admins" style={{
    padding:"0.2rem 2rem",
    height:"3rem",
    display:"flex",
    alignItems:"center",
    gap:"10px",
    alignContent:"center"
  }} className='btn btn-danger '>
    <span>
    <FaArrowLeft size={15}/>
    </span>
   
    Back
  </Link>
</div>

<div class="row">

  <div class="col-xxl">
    <div class="card mb-4">
      <div class="card-header d-flex align-items-center justify-content-between">
        <h5 class="mb-0">Add Information</h5>
       
      </div>
      <div class="card-body">
        <form>
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-name">Admin Name</label>
            <div class="col-sm-10">
              <input type="text" onChange={(e)=>setname(e.target.value)} value={name} class="form-control" id="basic-default-name" placeholder="John Doe" />
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-company">Admin Surname</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="basic-default-company"
                placeholder="e.g. Jongwe"
                onChange={(e)=>setsurname(e.target.value)} 
                value={surname}
              />
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-company">Admin Email</label>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="basic-default-company"
                placeholder="e.g. admin@bidfirst.com"
                onChange={(e)=>setemail(e.target.value)} 
                value={email}
              />
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-company">Admin Phone Number</label>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="basic-default-company"
                placeholder=""
                onChange={(e)=>setphone(formatPhoneNumber(e.target.value))}
                value={phone}
              />
            </div>
          </div>
       
       
       
   
       
        </form>
      </div>
    </div>
  </div>

  <div class="col-xxl">
    <div class="card mb-4">
      <div class="card-header d-flex align-items-center justify-content-between">
        <h5 class="mb-3">Add Information </h5>
    
      </div>
      <div class="card-body">
        <form>
        <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-company">Admin Password</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="basic-default-company"
                placeholder=""
                onChange={(e)=>setpassword(e.target.value)} 
                value={password}
              />
            </div>
          </div>
        <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-company">Confirm Password</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="basic-default-company"
                placeholder=""
                onChange={(e)=>setconfirmPassword(e.target.value)} 
                value={confirmPassword}
              />
            </div>
          </div>
         
  
        </form>
     
      </div>
    </div>
  </div>
</div>      

         
           
         <div style={{
          display:"grid",
          justifyContent:"center"
         }}>
         <div class="row justify-content-center">
            <div class="col-sm-10">
              <button onClick={signup} class="btn btn-primary">Send</button>
            </div>
          </div>
         </div>

            </div>
         

 <div class="content-backdrop fade"></div>
 </div>
 


  )
}

export default AddAdmin