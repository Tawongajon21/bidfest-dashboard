import React from 'react'
import { Link } from 'react-router-dom'

import { getauction } from '../redux/actions/auction'
import { createlot,getlots,deletelot,updatelot } from '../redux/actions/lot'
import { getbids } from '../redux/actions/bids'
import {useSelector,useDispatch} from "react-redux"
import { useState,useEffect,useRef } from 'react'
import SinglePageLoader from './common/SinglePageLoader'
import SinglePageError from './common/SinglePageError'
import { useParams } from 'react-router-dom'
import ImageLoader from './ImageLoader'
import { imageServerUrl } from '../redux/actions/baseUrl'
import {FaCheck} from "react-icons/fa"
import moment from 'moment/moment'
import { useMemo } from 'react'
import { connect } from 'react-redux'
import { FaArrowLeft,FaPlus } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

import getPreviousRoute from './common/usePreviousRoute'

function Bidders({data:userData}) {

  let signature=userData.signature
let previousRoute=localStorage.getItem("previousRoute")
console.log(previousRoute);


    const id= useParams().id;

    const getBids=useSelector((state)=>state.getBids);
  


  


    const dispatch=useDispatch();


    useEffect(() => {

        dispatch(getbids(id,signature))
        }, [getauction,getbids])



console.log(getBids);



  return (
    <div class="card">
 {
  getBids.loading ? <h2>Loading...</h2> :
  getBids.error ? <h2>Error</h2>
  :
  getBids.data.length === 0 ? null :
  <div style={{
    display:"flex",
    justifyContent:"space-between",
    alignContent:"center",
    alignItems:"center"
    }}>
         {
            getBids.loading ? <h5>
              Loading....
            </h5> :
            getBids.error ? <h5>
              Error...
            </h5> :
            <h5 class="card-header">
              Bidders for the {" "}{
          getBids.data[0]?.lot.propertyName
           
        
    } lot
            </h5>
        
          }
    
    <Link  
       
        class="btn btn-primary"
    
         style={{
     padding:"0.2rem 2rem",
     height:"3rem",
     display:"flex",
     alignItems:"center",
     gap:"10px",
     alignContent:"center"
    }} 
    to={previousRoute}
    
    
    className='btn btn-danger '>
     <span>
    <FaArrowLeft size={15} />
     </span>
    
    Go Back
    </Link>
    </div>
 }
    




{
  getBids.loading ? <SinglePageLoader/>
  :
  getBids.error ? <SinglePageError/>
  :
  getBids.data.length === 0 && <div class="container-xxl container-p-y">
  <div class="misc-wrapper">
 
    <h4 class="mb-4 mx-2">Sorry there are no bidders yet</h4>
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
   getBids.loading ? <SinglePageLoader/>
   :
   getBids.error ? <SinglePageError/>
   :
   getBids.data.length !== 0 &&    <div class="table-responsive text-nowrap">
   <table class="table">
     <thead>
       <tr>
         <th>Bidder Name</th>
         <th>Bidder Surname</th>
         <th>Bid Amount</th>
         <th>Bid Position</th>
      
       </tr>
     </thead>
     <tbody class="table-border-bottom-0">
       {
         getBids.loading ? <SinglePageError/> :
         getBids.error ? <SinglePageError/> :
       
          getBids.data.map((item,index)=>(
           <tr>
           <td>{item.user.name}</td>
           <td>{item.user.surname}</td>
           <td>{item.amount}</td>
           
        
           <td  style={{
             color : index+1 === 1 ? "green" : "blue"
           }}><b > { index+1}</b> </td>
      
         </tr>
         ))  

     
     
       }
    
    
     </tbody>
   </table>
 </div>
}

 
  </div>


  )
}

export default Bidders
{
    /**    <div class="content-wrapper">
    <style>
{
`
@keyframes pulse{
    0%{opacity:1;}
    25%{opacity:0.4;}
    50%{opacity:0.6;}
    75%{opacity:0.8;}
    100%{opacity:1;}
}
`
}

    </style>

<div class="container-xxl flex-grow-1 container-p-y">
<div style={{
display:"flex",
justifyContent:"space-between",
alignContent:"center",
alignItems:"center"
}}>
<h4 class="fw-bold py-3 mb-4">Lot </h4>

<Link to="/home/auctions" style={{
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
<>

{

loading ? <SinglePageLoader/> : error ? <SinglePageError/> :


<div class="row">

<div class="col-xxl">
<div class="card mb-4">
<div class="card-header d-flex align-items-center justify-content-between">
 <h5 class="mb-0">Lot Information</h5>

</div>
<div class="card-body">
 <form>
   <div class="row mb-3">
     <label class="col-sm-2 col-form-label" for="basic-default-name">Property Name</label>
     <div class="col-sm-10">
       <input type="text" class="form-control" disabled={true} value={data?.auctionName} id="basic-default-name" placeholder="John Doe" />
     </div>
   </div>
   <div class="row mb-3">
     <label class="col-sm-2 col-form-label" for="basic-default-company">Auction Name</label>
     <div class="col-sm-10">
       <input
         type="text"
         class="form-control"
         id="basic-default-company"
         placeholder="e.g. BidFest Kadoma"
         disabled={true} value={data?.auctionLocation}
 
       />
     </div>
   </div>
   <div class="row mb-3">
     <label class="col-sm-2 col-form-label" for="basic-default-email">Auction Location</label>
     <div class="col-sm-10">
       <div class="input-group input-group-merge">
         <input
           type="type"
           id="basic-default-email"
           class="form-control"
           placeholder="john.doe"
           aria-label="john.doe"
           aria-describedby="basic-default-email2"
           disabled={true}
           value={data?.auctionDate}
           
         />
       
       </div>
   
     </div>
   </div>
   <div class="row mb-3">
     <label class="col-sm-2 col-form-label" for="basic-default-email">Auction Date</label>
     <div class="col-sm-10">
       <div class="input-group input-group-merge">
         <input
           type="text"
           id="basic-default-email"
           class="form-control"
           placeholder="john.doe"
           aria-label="john.doe"
           aria-describedby="basic-default-email2"
           disabled={true} value={data?.auctionDeadline}
         />
       
       </div>
   
     </div>
   </div>
   <div class="row mb-3">
     <label class="col-sm-2 col-form-label" for="basic-default-email">Auction Deadline</label>
     <div class="col-sm-10">
       <div class="input-group input-group-merge">
         <input
           type="text"
           id="basic-default-email"
           class="form-control"
           placeholder="john.doe"
           aria-label="john.doe"
           aria-describedby="basic-default-email2"
           disabled={true} value={data?.auctionTime}
          
         />
       
       </div>
   
     </div>
   </div>
   <div class="row mb-3">
     <label class="col-sm-2 col-form-label" for="basic-default-email">Lot Image</label>
     <div class="col-sm-10">
              <div class="card h-100">
                <div class="card-body">
                {
                    data?.featuredImage.map((item)=>(
                        <ImageLoader newPath={item?.newPath} thumbnail={item?.thumbnail}/>
                    ))
                }
           
                </div>
              </div>
            </div>
   </div>


 </form>
</div>
</div>
</div>


</div>      


}

<div style={{
display:"flex",
justifyContent:"space-between",
alignContent:"center",
alignItems:"center"
}}>
<h4 class="fw-bold py-3 mb-4">Bidders </h4>


</div>
  
</>

    


     </div>
 

<div class="content-backdrop fade"></div>











                    <div style={{
                  display:"grid",
                

                  
                }} >
              <div class="">
              
                <div class="card-body demo-vertical-spacing demo-only-element">
                  <div    style={{
                        width:"100%",
                        display:"flex"
                      }} >
                   
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search..."
                      aria-label="Search..."
                      aria-describedby="basic-addon-search31"
                      value={searchQuery}
                      onChange={e=>setsearchQuery(e.target.value)}
                      style={{
                        width:"260px"
                      }} 
                    />
                          <button  
type="button"


className='btn btn-danger '>


Search
</button>

                  </div>
<div style={{
width:"50%"
}}>
<select onChange={e=>setsortField(e.target.value)} value={sortField} id="defaultSelect" class="form-select">
                      <option>Order By</option>
                    <option value="currentPrice">Price</option>
                    <option value="mileage">Mileage</option>
                    <option value="auctionDate">Auction Date</option>
                    </select>
<select onChange={e=>setsortOrder(e.target.value)} value={sortOrder} id="defaultSelect" class="form-select">
                      <option>Order By</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  
                    </select>
</div>
               

            
                </div>
              </div>
            </div>
  

<div style={{
display:"grid",
justifyContent:"center"
}}>
<div class="col">
           
                  <div class="demo-inline-spacing">
            
                    <nav aria-label="Page navigation">
                      <ul class="pagination">
{
pageNumbers.map(num=>(
<li class={`page-item ${num===currentPage ?  "active" : ""}`}>
                          <button onClick={()=>setcurrentPage(num)} class="page-link" href="javascript:void(0);"
                            >
                            {num}
                            </button>
                        </li>
))
}

                  
                     
                      
                 
                      </ul>
                    </nav>
               
                  </div>
                </div>
</div>

                    <div class="row mb-5">


              
                 

                    </div>




</div> */
}

