import React from 'react'
import { useSelector } from 'react-redux'
import {FaCheck} from "react-icons/fa"
import { useEffect,useState } from 'react';
function Toast() {
    const toast= useSelector(state=>state.toast);

    let {percent,message,show,finished}=toast

    const [visible, setvisible] = useState(false)
  
useEffect(() => {
if (show && finished===true) {
    setvisible(true)
    const timer=setTimeout(()=>setvisible(false),5000);
    return ()=>clearTimeout(timer)
}
}, [show,finished])
console.log(visible);
return(
   <>
  {
  visible === true &&
<div     style={{
    position:"fixed",
   top:"0px",
    left:"50%",

    transform:"translateX(-50%)",
    zIndex:"2000",
    background:"white",
  
    height:"35px",

    boxShadow:"0 0 10px rgba(0,0,0,0.2)",
    
    overflowX:"hidden",
    overflowY:"hidden",
    pointerEvents:"auto",
    width:"100%"
   
  }} >

<div style={{
    display:"grid"
}} >
   <div style={{
    display:"grid"
   }}>
    <p style={{
        color:"black",
        display:"flex",
        justifyContent:"center",
        justifySelf:"center",
        gap:"1rem",
        alignItems:"center",
        alignContent:"center",
        marginTop:"0.5rem"
    }}>
     <span>
{message}
   
     </span>
     <FaCheck style={{
            color:"green"
        }} size={20}/> 
       
 
    </p>
   









   </div>



</div>

   </div>
}
{
    finished === false && show=== true &&  <div     style={{
        position:"fixed",
        top:"0px",
        left:"50%",
        
        transform:"translateX(-50%)",
        zIndex:"2000",
        background:"#1e90ff",
        
        height:"35px",
        
        boxShadow:"0 0 10px rgba(0,0,0,0.2)",
        
        overflowX:"hidden",
        overflowY:"hidden",
        pointerEvents:"auto",
        width:"100%"
        
        }} >
        
        <div style={{
        display:"grid"
        }} >
        <div style={{
        display:"grid"
        }}>
        <p style={{
            color:"white",
            display:"grid",
            justifyContent:"center",
            justifySelf:"center"
        }}>
         <span>
         Uploading Please Wait {percent}%
         
         </span>
          
           
        
        </p>
        <p style={{
            marginTop:"-0.5rem",
            color:"white",
            height:"5px",
            width:`${percent}%`,
            backgroundColor:"white"
        }}>
        
        
        </p>
        
        
        
        
        
        
        
        
        
        </div>
        
        
        
        </div>
        
        </div>
  
    }
    

</>

    
    

)
  



  
}

export default Toast

{
     <div class="container-xxl flex-grow-1 container-p-y">
    {

    }

</div>
     
}


{
    /**    let fadeInOut=`
    @keyframes fadeInOut{
        0%{
            opacity:0,
            transform:translateY(30px)
        },
        10%{
            opacity:1,
            transform:translateY(0)
        },
        90%{
            opacity:1
        },
        100%{
            opacity:0,
            transform:translateY(30px)

        }
    }
    `;
  
console.log(toast);
if (show===false) {
    return null
}
  return (
<div style={{
    position:"absolute",
    left:"0",
  right:"0",
    zIndex:"999999",
    margin:"auto",
    width:"100%"
}}>
<div  style={{
    position:"fixed",
top:"0",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    paddingTop:"20px",
 
    color:"#fff",
    padding:"12px 20px",
    borderRadius:"6px",
  
    animation:`${fadeInOut} 3s forwards`,
    zIndex:"9999",
    color:"blue"
    
}}>
    <div
class="bs-toast toast fade show bg-white"
role="alert"
aria-live="assertive"
aria-atomic="true"
style={{
    display:"grid",
    justifyContent:"center"
}}
>
<div class="toast-header">
  
  <div style={{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    alignContent:"center"

  }}>
  <div class="me-auto fw-semibold"><i class="bx bx-bell me-2"></i>  Uploading</div>

  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>

</div>
<div class="toast-body">
    {
        finished === true ? 
        <p style={{
            display:"flex",
            justifyContent:"center",
            color:"black"
        }}>
       
        </p> :

<p style={{
    display:"flex",
    justifyContent:"center",
    color:"black"
}}>
{message}
</p> 

    }
  



{
    finished===true ? <div style={{
        display:"grid",
        justifyContent:"center"
    }}>
        <p>
            {message}
        </p>
        <p style={{
        display:"grid",
        justifyContent:"center"
    }}>
        <FaCheck class="btn-success" size={25}/>
        </p>
 
   
    </div>
    
    : 
    <div class="progress">
    <div
      class="progress-bar "
      role="progressbar"
      style={{width: `${percent}%`}}
      aria-valuenow="25"
      aria-valuemin="0"
      aria-valuemax="100"
  
    >
   
    </div>
  </div>
 
}


</div>

</div>


</div>
</div>

s */
}



