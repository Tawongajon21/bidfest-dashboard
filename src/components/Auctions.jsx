import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux"
import { useState,useEffect } from 'react'
import { getauctions,getauction,updateauction,deleteauction } from '../redux/actions/auction'
import moment from 'moment'
import FormLoading from './common/FormLoading'
import ImageLoader from './ImageLoader'
import { baseUrl } from '../redux/actions/baseUrl'
import FormError from './common/FormError'
import TableLoading from './common/TableLoading'
import SinglePageError from './common/SinglePageError'
import SInglePageLoader from './common/SinglePageLoader'
import DeleteLoading from './common/DeleteLoading'
function Auctions({data:userData}) {
  const dispatch=useDispatch();
  let previousRoute=localStorage.getItem("previousRoute")
  const auctions=useSelector((state)=>state.getAuctions);
  const auction=useSelector((state)=>state.getAuction);
  const updateAuction=useSelector((state)=>state.updateAuction)
  const deleteAuction=useSelector((state)=>state.deleteAuction)
  const [showLoading, setshowLoading] = useState(false)
  const [modalMessage, setmodalMessage] = useState("")
  console.log(deleteAuction);
  let signature=userData.signature
  const [formData, setformData] = useState({
    auctionName:"",
    auctionLocation:"",
    auctionDate:"",
    auctionDeadline:"",
    auctionTime:"",
    images:[],
    image:"",
    thumbnail:"",
    src:""
    
  })
  console.log(formData);
  const {loading,error,data}=auctions;
  useEffect(() => {
    dispatch(getauctions())
    
  }, [getauctions])
  
  const handleChange=(event)=>{
   const {name,value}=event.target;
   setformData(prev=>({...prev,[name]:value}))
}
const handleFileChange=(e)=>{
  setformData(prev=>({...prev,images:e.target.files}))
}
function onSubmit(id) {
  let auctionData=formData;

dispatch(updateauction(auctionData,id,signature))
}
console.log(showLoading);

useEffect(()=>{
  if (deleteAuction.success===true) {
    setTimeout(() => {
      setshowLoading(!showLoading)
    }, 2000);
   
    setmodalMessage("Item has been deleted succesfully")
    dispatch({type:"DELETE_AUCTION_RESET"})
   dispatch(getauctions())

   
  }


  if(deleteAuction.fail===true){
    setmodalMessage("There is an error that happened whilst deleting the auction please try again.")
  }
  
  },[deleteAuction,dispatch])
  const handleDelete=(id)=>{
    dispatch(deleteauction(id,signature))
  
  }
  return (
    <>
    {
      showLoading &&   <div id='modal'style={{
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
      modalMessage
    }
    
    
    
    </div>
      </div> 
    }

{
  loading ? <SInglePageLoader/> :
  error ? <SinglePageError/>
  :
  data?.length===0 &&  <div class="container-xxl container-p-y">
  <div class="misc-wrapper">
 
    <h4 class="mb-4 mx-2">Sorry there are no auctions yet</h4>
  <p style={{
    display:"flex",
    gap:"1rem"
  }}>
  <Link to="/home/add-auction" class="btn btn-primary">Add New Auction</Link>
  <Link to={previousRoute}  class="btn btn-primary-outline">Back to the previous page</Link>
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
  data?.length !== 0 &&   <div class="container-xxl flex-grow-1 container-p-y">
           
  <div style={{
      display:"flex",
      justifyContent:"space-between",
      alignContent:"center"
  }}>
        <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Auctions /</span> All Auctions</h4>
  <Link type="button" to="/home/add-auction" style={{
    height:"3rem"
  }} class="btn btn-outline-primary">Add Auction</Link>
  </div>
               
                <div class="card">
             
                  <div class="table-responsive text-nowrap">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Type</th>
                          <th>Date / Open Time</th>
                          <th>Close Time</th>
                          <th>Location</th>
                          <th>Number of Lots</th>
                          
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody class="table-border-bottom-0">
                    {
                      data?.map((item)=>(
                        <tr>
                        <td>{item.name}</td>
                        <td>{item.type}</td>
                        <td>
                          {
                            item.type === "Onsite" ? moment(item.startDateTime).format("D MMMM YYYY") :
                            moment(item.openTime).format("D MMMM YYYY")
                          }
                        </td>
                        <td>
                        {
                            item.type === "Online" ? moment(item.closeTime).format("D MMMM YYYY") :
                          "-"
                          }

                        </td>
                        <td>{item.type === "Onsite" ? item.location : "-"}</td>
                     
                        <td>{item?.lots?.length}</td>
                        <td style={{
                          display:"flex",
                          gap:"1rem"
                        }}>
                          <Link 
                         to={`/home/auction/${item._id}`}
                          className='btn btn-success'   >
                            More Info
                          </Link>
                        
  

  <button   className='btn btn-danger'   onClick={()=>{
   
  
  
       if (window.confirm(`Are you sure you want to delete the ${item.auctionName} auction?`)) {
     
        setshowLoading(!showLoading)
        setmodalMessage("Loading Please Wait.")
        dispatch(deleteauction(item._id,signature))
    
      }
 
  
                             
                          }}
  
  
                             
                         >
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
        <h5 class="modal-title" id="exampleModalLabel1">Auction Information</h5>
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
            <label for="nameBasic" class="form-label">Auction Name</label>
            <input  onChange={handleChange} name='auctionName' type="text" id="nameBasic" class="form-control" value={formData?.auctionName} placeholder="Enter Name" />
          </div>
          <div class="col mb-3">
            <label for="nameBasic" class="form-label">Auction Location</label>
            <input onChange={handleChange} name='auctionLocation' type="text" id="nameBasic" class="form-control" value={formData?.auctionLocation} placeholder="Enter Name" />
          </div>
        </div>
        <div class="row g-2">
          <div class="col mb-0">
            <label for="emailBasic" class="form-label">Auction Date</label>
            <input onChange={handleChange} name="auctionDate" type="text" id="emailBasic" class="form-control" value={ moment(formData?.auctionDate).format("D MMMM YYYY")}  placeholder="xxxx@xxx.xx" />
          </div>
          <div class="col mb-0">
            <label for="dobBasic" class="form-label">Auction Deadline</label>
            <input onChange={handleChange} name='auctionDeadline' type="text" id="dobBasic" class="form-control" value={ moment(formData?.auctionDeadline).format("D MMMM YYYY")}  placeholder="DD / MM / YY" />
          </div>
        
        </div>
        <div className="row g-2">
        <div class="col mb-0">
            <label for="dobBasic" class="form-label">Auction Time</label>
            <input onChange={handleChange} name='auctionTime' type="text" id="dobBasic" class="form-control" value={formData?.auctionTime}  placeholder="DD / MM / YY" />
          </div>
        </div>
        <div className="row g-2">
        <label style={{
          marginTop:"1.5rem"
        }} for="dobBasic" class="form-label">Auction Feature Image</label>
          
          <img class="card-img-top" src={`${baseUrl}/${formData?.image}`} alt="Card image cap" />
          
        </div>
        <div className='row g-2' style={{
          marginTop:"1rem"
        }}>


<input type="file" accept='image/*' onChange={handleFileChange} />

<button className='btn btn-secondary'>
Update Image
</button>

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

export default Auctions;

{
  /**   
   *      if (window.confirm(`Are you sure you want to delete the account of ${item.name} ${item.surname}?`)) {
        dispatch(deleteadmin(item._id,signature))
      window.location.reload()
   * 
   *    dispatch(getadmin(item._id,signature))
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
                          } */
}