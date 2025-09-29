import React from 'react'
import { useState,useEffect } from 'react'
function FormLoading() {
    const [dots, setdots] = useState('')
useEffect(()=>{
const intervalId=setInterval(()=>{
    if (dots.length<3) {
        setdots(dots+'.')
    }else{
        setdots('')
    }
},500);
return ()=> clearInterval(intervalId)
},[dots])

  return (
    <div class="alert alert-secondary alert-dismissible" role="alert">
 Loading <span className='loading-dots'>{dots}</span>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  
  )
}

export default FormLoading