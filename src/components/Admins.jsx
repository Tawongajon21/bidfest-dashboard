import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux"
import { useState,useEffect } from 'react'
import { getadmins,deleteadmin,getadmin,updateadmin } from '../redux/actions/admin'
import FormLoading from './common/FormLoading'
import FormError from './common/FormError'
import SinglePageError from './common/SinglePageError'
import SInglePageLoader from './common/SinglePageLoader'
function Admins({data:userData}) {
  let previousRoute=localStorage.getItem("previousRoute")
const [errorMessage, setErrorMessage] = useState("")
  const admins=useSelector((state)=>state.getAdmins);
  const admin=useSelector((state)=>state.getAdmin);
  const updateAdmin=useSelector((state)=>state.updateAdmin)
  const {loading,error,data}=admins;
  const [formData, setformData] = useState({})
  const dispatch=useDispatch();
  console.log(admins);
  let signature=userData?.signature

  const handleChange=(event)=>{
    setformData({...formData,[event.target.name]:event.target.value})
}
  console.log(admin);
  useEffect(() => {
setformData(admin.data)
      dispatch(getadmins(signature))
    
    if(error){
  
          setErrorMessage('error')
          setTimeout(()=>{
              setErrorMessage('')
          },3000)
      }
      }, [getadmins,error])
      console.log(formData);
      useEffect(() => {
        if (updateAdmin.data) {
         console.log("hello world");
         window.location.reload()
        }
       
         }, [updateAdmin,dispatch])
 
      function onSubmit(id) {
        dispatch(updateadmin(formData.email,formData.phone,formData.name,formData.surname,id,signature))
        
if (updateAdmin.error) {

setErrorMessage(updateAdmin.error)
setTimeout(()=>{
    setErrorMessage('')
},3000)
}
else if(updateAdmin.success){
window.location.reload()
}
    }
  return (
    <>

{
  loading ? <SInglePageLoader/> :
  error ? <SinglePageError/>
  :
  data?.length===0 &&  <div class="container-xxl container-p-y">
  <div class="misc-wrapper">
 
    <h4 class="mb-4 mx-2">Sorry there are no admins yet</h4>
    <p style={{
      display:"flex",
      gap:"1rem"
    }}>
    <Link to="/home/add-admin"  class="btn btn-primary">Add Admin</Link>
    <Link to={previousRoute}  class="btn btn-outline-primary">Back to the previous page</Link>
    </p>


    <div class="mt-3">
      <img
        src="/assets/img/illustrations/page-misc-error-light.png"
        alt="page-misc-error-light"
        width="500"
        class="img-fluid"
        data-app-dark-img="illustrations/page-misc-error-dark.png"
        data-app-light-img="illustrations/page-misc-error-light.png"
      />
    </div>
  </div> 
</div>
}
{
    loading ? <SInglePageLoader/>
    :
    error ? <SinglePageError/>
    :
   data?.length !== 0 && <div class="container-xxl flex-grow-1 container-p-y">
         
   <div style={{
    display:"flex",
    justifyContent:"space-between",
    alignContent:"center"
   }}>
      <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Admins </span></h4>
   <Link type="button" to="/home/add-admin" style={{
   height:"3rem"
   }} class="btn btn-outline-primary">Add Admin</Link>
   </div>
             
              <div class="card">
           
                <div class="table-responsive text-nowrap">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Admin Name</th>
                        <th>Admin Surname</th>
                        <th>Admin Phone Number</th>
                        <th>Admin Email</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
   
   
                    <tbody class="table-border-bottom-0">
                     {
                    data?.map((item)=>(
                         <tr>
                         <td>{item.name}</td>
                         <td>{item.surname}</td>
                         <td>{item.phone}</td>
                         <td>{item.email}</td>
                         <td style={{
                           display:"flex",
                           gap:"1rem"
                         }}>
                           <button 
                                data-bs-toggle="modal"
                                data-bs-target="#basicModal"
                           className='btn btn-success'  onClick={()=>{
                             dispatch(getadmin(item._id,signature))
                             console.log(admin);
   
                             setformData(admin)
                             console.log(formData);
                             console.log("hello");
                             if (admin.loading) {
                               console.log("loading");
                             }else if(admin.error){
   console.log("error");
                             }else{
                               setformData(admin.data)
                             }
                           }} >
                             More Info
                           </button>
                         
   
   <button className='btn btn-primary'>
     Edit
   </button>
   <button className='btn btn-danger' onClick={()=>{
        if (window.confirm(`Are you sure you want to delete the account of ${item.name} ${item.surname}?`)) {
           dispatch(deleteadmin(item._id,signature))
         window.location.reload()
       }
   
   
                              
                           }} >
                             Delete
                           </button>
   
                         </td>
                       
                       
                       </tr>
                       )) 
   
                     }
                     
                   
                    </tbody>
                  </table>
                </div>
              </div>
        
              <hr class="my-5" />
   
     
         
           
         
         
            </div>
   
}
    

<div class="content-backdrop fade"></div>

{
  formData === 'undefined' ? null : <div class="modal fade" id="basicModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel1">Adminstrator Information</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col mb-3">
            <label for="nameBasic" class="form-label">Name</label>
            <input  onChange={handleChange} name='name' type="text" id="nameBasic" class="form-control" value={formData?.name} placeholder="Enter Name" />
          </div>
          <div class="col mb-3">
            <label for="nameBasic" class="form-label">Surname</label>
            <input onChange={handleChange} name='surname' type="text" id="nameBasic" class="form-control" value={formData?.surname} placeholder="Enter Name" />
          </div>
        </div>
        <div class="row g-2">
          <div class="col mb-0">
            <label for="emailBasic" class="form-label">Email</label>
            <input onChange={handleChange} name="email" type="text" id="emailBasic" class="form-control" value={formData?.email}  placeholder="xxxx@xxx.xx" />
          </div>
          <div class="col mb-0">
            <label for="dobBasic" class="form-label">Phone Number</label>
            <input onChange={handleChange} name='phone' type="text" id="dobBasic" class="form-control" value={formData?.phone}  placeholder="DD / MM / YY" />
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
          Close
        </button>
        <button onClick={()=>onSubmit(formData._id)} type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> 
}


</>
  )
}

export default Admins