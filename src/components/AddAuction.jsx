import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowLeft} from "react-icons/fa"
import Toast from './common/Toast'
import {connect} from "react-redux"
import { useState,useEffect } from 'react'
import debounce from "lodash.debounce"
import { useDispatch,useSelector } from 'react-redux'
import { createauction } from '../redux/actions/auction'

import {baseUrlFrontend} from "../frontend-url"
import { useNavigate } from 'react-router-dom'
import DeleteLoading from './common/DeleteLoading'
function AddAuction({data:userData}) {
  let previousRoute=localStorage.getItem("previousRoute")
  const navigate=useNavigate()
  let signature=userData.signature;
  let dispatch=useDispatch()
  const addAuction=useSelector((state)=>state.addAuction)
  const toast= useSelector(state=>state.toast);

  const [name, setName] = useState("")
  const [type, settype] = useState("Onsite")
  const [startDateTime, setstartDateTime] = useState("Onsite")
  const [openTime, setopenTime] = useState("")
  const [closeTime, setcloseTime] = useState("")
  const [location, setlocation] = useState("")
  const [auctionLocation, setauctionLocation] = useState("")
  const [auctionDate, setauctionDate] = useState("")
  const [auctionDeadline, setauctionDeadline] = useState("")
  const [auctionTime, setauctionTime] = useState("")
 
  const [images, setImages] = useState([])
  const [showToast, setshowToast] = useState(false)
  const [imagesUrl, setImagesUrl] = useState([])

  const [errorMessage, setErrorMessage] = useState("")
  const [capacity, setcapacity] = useState(0)
  const [suggestedItems, setsuggestedItems] = useState([])
  const [selectedItems, setselectedItems] = useState([])
  const [showLoading, setshowLoading] = useState(false)
  const [modalMessage, setmodalMessage] = useState("")

  function imageHandler(e) {
      setImages([...images,e.target.files[0]])
      setImagesUrl((urlList)=>[
          ...urlList,
          URL.createObjectURL(e.target.files[0])
      ])
  
  }
const [progress, setprogress] = useState(0)
console.log(progress);
  function deleteFile(e) {
      const s= images.filter((item,index)=>index!==e)
      const d= imagesUrl.filter((item,index)=>index!==e)
      setImages(s);
      setImagesUrl(d);
     
  }
  function submit() {
    let inputData={name,type,...(type==="Onsite"&& {startDateTime,location}),...(type==="Online"&& {openTime,closeTime}),images}
   
    dispatch(createauction(inputData,signature))
 
}

  useEffect(() => {

    images.length&& console.log(images)
    imagesUrl.length&& console.log(imagesUrl)
    
    }, [images,imagesUrl])



const handleRemoveItem=(item)=>{
 
 setselectedItems((prevItems)=>prevItems.filter((i)=>i.id!==item.id))
}


  useEffect(()=>{
    if (addAuction.data) {
      setmodalMessage("Item has been added succesfully")

     console.log("Hello there is data here");
      setTimeout(() => {
        setshowLoading(!showLoading)
      }, 2000);
      
     setTimeout(()=>{
window.location.href=previousRoute
     },2600)
     
     
    }
  
  
    if(addAuction.fail===true){
      setmodalMessage("There is an error that happened whilst deleting the auction please try again.")
    }
    if(addAuction.loading===true){
     setshowLoading(true)
      setmodalMessage("Loading Please Wait.")
      console.log("hello we are loading");
    }
    
    },[addAuction.data,dispatch,addAuction.loading])
  console.log(auctionDeadline);
  console.log(addAuction);
console.log(modalMessage);

  return (
 

       <div class="content-wrapper">
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
       <div class="container-xxl flex-grow-1 container-p-y">
       <div style={{
  display:"flex",
  justifyContent:"space-between",
  alignContent:"center",
  alignItems:"center"
}}>
       <h4 class="fw-bold py-3 mb-4"> Add Auction</h4>

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

<div class="row">

  <div class="col-xxl">
    <div class="card mb-4">
      <div class="card-header d-flex align-items-center justify-content-between">
        <h5 class="mb-0">Add Information</h5>
       
      </div>
      <div class="card-body">
        <form>
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-name">Auction Name</label>
            <div class="col-sm-10">
              <input type="text" onChange={(e)=>setName(e.target.value)} class="form-control" id="basic-default-name" placeholder="John Doe" />
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-name">Auction Type</label>
            <div class="col-sm-10">
              <select name="" onChange={(e)=>settype(e.target.value)} class="form-select" id="exampleFormControlSelect1" aria-label="Default select example">
              <option value="">
  Select Auction Type
</option>
              <option value="Online">
 Online
</option>
              <option value="Onsite">
 Onsite
</option>

              </select>
            
            </div>
          </div>
          {
            type === "Onsite"&&(
<>
<div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-company"> Location</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="basic-default-company"
                placeholder="e.g. BidFest Kadoma"
                onChange={(e)=>setlocation(e.target.value)}
              />
            </div>
          </div>
<div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-company">Start Time</label>
            <div class="col-sm-10">
              <input
                type="datetime-local"
                class="form-control"
                id="basic-default-company"
                placeholder="e.g. BidFest Kadoma"
                onChange={(e)=>setstartDateTime(e.target.value)}
                value={startDateTime}

              />
            </div>
          </div>
</>
            )
          }
          {
            type === "Online"&&(
<>
<div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-company">Open Time</label>
            <div class="col-sm-10">
            <input
                type="datetime-local"
                class="form-control"
                id="basic-default-company"
                placeholder="e.g. BidFest Kadoma"
                onChange={(e)=>setopenTime(e.target.value)}
                value={openTime}
                required
              />
            </div>
          </div>
<div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-company">Start Time</label>
            <div class="col-sm-10">
              <input
                type="datetime-local"
                class="form-control"
                id="basic-default-company"
                placeholder="e.g. BidFest Kadoma"
                onChange={(e)=>setcloseTime(e.target.value)}
                value={closeTime}
                required

              />
            </div>
          </div>
</>
            )
          }
      
        
       
        
   
       
        </form>
      </div>
    </div>
  </div>

  <div class="col-xxl">
    <div class="card mb-4">
      <div class="card-header d-flex align-items-center justify-content-between">
        <h5 class="mb-0">Upload Auction Featured Image </h5>
    
      </div>
      <div class="card-body">
        <form>
          <div class="row mb-3">
           
            <div class="col-sm-10">
              <div class="input-group input-group-merge">
                <span id="basic-icon-default-fullname2" class="input-group-text"
                  ><i class="bx bx-user"></i
                ></span>
                <input
                          type="file"
                          class="form-control"
                          id="inputGroupFile04"
                          aria-describedby="inputGroupFileAddon04"
                          aria-label="Upload"
                          onChange={imageHandler} 
                        />
              </div>
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
              <button onClick={()=>submit()
            
              
            } class="btn btn-primary" type='button'>Add Auction</button>
            </div>
          </div>
         </div>

            </div>
        

 <div class="content-backdrop fade"></div>
 <div className='' style={{
  display:"grid",
  justifyContent:"center"
 }}>

 </div>


 </div>
 


  )
}

export default connect(null,{createauction})(AddAuction)