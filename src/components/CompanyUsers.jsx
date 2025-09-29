import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux"
import { useState,useEffect } from 'react'
import {getcompanyusers } from '../redux/actions/admin'
import TableLoading from './common/TableLoading'
import FormLoading from './common/FormLoading'
import FormError from './common/FormError'
import SinglePageError from './common/SinglePageError'
import SInglePageLoader from './common/SinglePageLoader'
function CompanyUsers({data:userData}) {

  let previousRoute=localStorage.getItem("previousRoute")
  const users=useSelector((state)=>state.getCompanyUsers);

  const {loading,error,data}=users;

  const dispatch=useDispatch();

  let signature=userData?.signature



  useEffect(() => {

  
      dispatch(getcompanyusers(signature))

      }, [getcompanyusers])
   

     
  return (
    <>
{
  loading ? <SInglePageLoader/> :
  error ? <SinglePageError/>
  :
  data?.length===0 &&  <div class="container-xxl container-p-y">
  <div class="misc-wrapper">
 
    <h4 class="mb-4 mx-2">Sorry there are no users yet</h4>
    <Link to={previousRoute}  class="btn btn-primary">Back to the previous page</Link>
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
    data?.length !== 0 &&  <div class="container-xxl flex-grow-1 container-p-y">
         
    <div style={{
     display:"flex",
     justifyContent:"space-between",
     alignContent:"center"
    }}>
       <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Users </span></h4>
    
    </div>
              
               <div class="card">
            
                 <div class="table-responsive text-nowrap">
                   <table class="table">
                     <thead>
                       <tr>
                         <th>User Name</th>
                         <th>User Surname</th>
                         <th>User Phone Number</th>
                         <th>User Email</th>
                         <th>User Role</th>
                        
                       </tr>
                     </thead>
    
    
                     <tbody class="table-border-bottom-0">
                      {
                        loading ? <FormLoading/> : 
                        error ? <FormError/>:
                       data ?   users.data?.map((item)=>(
                          <tr>
                          <td>{item.name}</td>
                          <td>{item.surname}</td>
                          <td>{item.phone}</td>
                          <td>{item.email}</td>
                          <td>{item.role}</td>
                        
                        
                        
                        </tr>
                        )) : 
                        null
                        
    
                      }
                      
                    
                     </tbody>
                   </table>
                 </div>
               </div>
         
               <hr class="my-5" />
    
      
          
            
          
          
             </div>
}
   


<div class="content-backdrop fade"></div>




</>
  )
}

export default CompanyUsers


{
    /*
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
  */
  }