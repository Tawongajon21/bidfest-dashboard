import React from 'react'
import { useState } from 'react'
function DeleteLoading({closeModal,setcloseModal,message}) {

  return (
 closeModal&&   <div id='modal'style={{
    position:"fixed",
    top:"0",
    left:"0",
    width:"100%",
    height:"100%",
    background:"rgba(0,0,0,0.6)",
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
  }} className='modal'>
<div style={{
  background:"white",
  padding:"2rem",
  width:"90%",
  maxWidth:"400px",
  position:"relative",
  textAlign:"center",
  margin:"0 auto"
}} className='modal-content' >
{
  message === "Item has been added succesfully"  ? <>
  <h3 >
{message}

</h3>
<button  onClick={()=>{
  setcloseModal(!closeModal)
}}   data-bs-dismiss="modal" className='btn btn-danger'>
  Close
</button>
  </> :      <>
  <h3>
  {message}
  </h3>
    
     </>

}


</div>
  </div> 
  ) 

}

export default DeleteLoading