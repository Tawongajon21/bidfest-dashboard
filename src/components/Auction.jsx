import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft,FaPlus } from 'react-icons/fa'
import { getauction } from '../redux/actions/auction'
import { createlot,getlots,deletelot,updatelot } from '../redux/actions/lot'
import {useSelector,useDispatch} from "react-redux"
import { useState,useEffect } from 'react'
import SinglePageLoader from './common/SinglePageLoader'
import SinglePageError from './common/SinglePageError'
import { useParams } from 'react-router-dom'
import ImageLoader from './ImageLoader'
import { CATEGORY_FIELDS } from '../redux/constants/CATEGORY_FIELDS'
import {FaCheck} from "react-icons/fa"
import moment from 'moment/moment'
import { useMemo } from 'react'
import { connect } from 'react-redux'
import DeleteLoading from './common/DeleteLoading'
import { baseUrl,imageServerUrl } from '../redux/actions/baseUrl';
import MoreInfoModal from './MoreInfoModal'
function Auction({data:userData}) {
  const [itemType, setitemType] = useState("");

  const [propertyName, setpropertyName] = useState("");
  const [expectedPrice, setexpectedPrice] = useState(0);
  const [currentPrice, setcurrentPrice] = useState(0);
  const [startingPrice, setstartingPrice] = useState(0);


  const [specs, setspecs] = useState({})
  const handleSpecsChange=(field,value)=>{
    setspecs((prev)=>({...prev,[field]:value}))
  }

  let previousRoute=localStorage.getItem("previousRoute")
  const [closeModal, setcloseModal] = useState(false)
  const [showLoading, setshowLoading] = useState(false)
  const [modalMessage, setmodalMessage] = useState("")
  let signature=userData.signature
const [isEditMode, setisEditMode] = useState(false);
const [showModal, setshowModal] = useState(false)
console.log(isEditMode);
const [formData, setformData] = useState({})
    const id= useParams().id;
    const auction=useSelector((state)=>state.getAuction);
    const lots=useSelector((state)=>state.getLots);
    const deletelotRedux=useSelector((state)=>state.deleteLot);
    const updateLot=useSelector((state)=>state.updateLot);
    const createLot=useSelector((state)=>state.addLot);

    const loadingState= useSelector(state=>state.loading);
console.log(itemType)
    const addLot=useSelector((state)=>state.addLot);
  
    const [visible, setvisible] = useState(false)
    const [progress, setprogress] = useState(0)
    const [finished, setfinished] = useState(false)
    const [show, setshow] = useState(false)
const [filter, setfilter] = useState("")
    useEffect(() => {
      if (loadingState.show && loadingState.finished===true) {
          setvisible(true)
          const timer=setTimeout(()=>setvisible(false),5000);
          return ()=>clearTimeout(timer)
      }
      }, [loadingState.show,loadingState.finished])

    const [mileage, setmileage] = useState("");
    const [vehicleType, setvehicleType] = useState("");
    const [fuelType, setfuelType] = useState("");
    const [numberOfDoors, setnumberofDoors] = useState("");

    const [seats, setseats] = useState("");
    const [year, setyear] = useState("");
    const [keyAvailable, setkeyavailable] = useState(false);

    const [file, setfile] = useState([])
    const [exteriorImages, setexteriorImages] = useState([])
    const [interiorImages, setinteriorImages] = useState([])
    const [lotImages, setlotImages] = useState([])
    const [sortedData, setsortedData] = useState([])
    const [currentPage, setcurrentPage] = useState(1);
    const itemsPerPage=6
  

    let code= `BF`+(Math.floor((Math.random()*10))*100) ;
 
  const {loading,error,data}=auction;

    let location=auction.loading === "loading" ? "loading" :  auction.error ? "error" : data ? data.auctionLocation: null;
  let auctionDate=auction.loading === "loading" ? "loading" :  auction.error ? "error" : data ? data.auctionDate: null;
  let auctionName=auction.loading === "loading" ? "loading" :  auction.error ? "error" : data ? data.auctionName: null;

  let auctionDeadline=auction.loading === "loading" ? "loading" :  auction.error ? "error" : data ? data.auctionDeadline: null;
  let auctionLocation=auction.loading === "loading" ? "loading" :  auction.error ? "error" : data ? data.auctionLocation: null;
  let auctionTime=auction.loading === "loading" ? "loading" :  auction.error ? "error" : data ? data.auctionDeadline: null;
  let auctionId=auction.loading === "loading" ? "loading" :  auction.error ? "error" : data ? data._id: null;


    const dispatch=useDispatch();


    useEffect(() => {
  
        dispatch(getauction(id))
        dispatch(getlots(id))
        const sortedData=lots.loading === "loading" ? "loading" :lots.error ? "error" : lots.data ?    [...lots.data]: [];
        if (filter==="price-asc") {
          sortedData?.sort((a,b)=>a.currentPrice-b.currentPrice)
          alert("hello world");
        }
        }, [getauction,getlots,filter])
        const [sortField, setsortField] = useState("currentPrice");
        const [sortOrder, setsortOrder] = useState("price-asc")
        const [searchQuery, setsearchQuery] = useState('')


const displayedLots=useMemo(()=>{

  if(!lots?.data) return [];
  let sorted= [...lots?.data].sort((a,b)=>{
  let aVal=a[sortField];
  let bVal=b[sortField];
  if (sortField==="auctionDate") {
    aVal=new Date(aVal);
    bVal=new Date(bVal)
  }
  return sortOrder==="asc" ? aVal-bVal: bVal-aVal

})
if (searchQuery.trim()!=="") {
  sorted=sorted.filter(lot=>lot.propertyName.toLowerCase().includes(searchQuery.toLowerCase()))
}
return sorted
},[lots,sortField,sortOrder,searchQuery])

  function submit() {
 
    let currentPrice=startingPrice;
    let inputData={   auction,propertyName,code,location,auctionDate,mileage,keyAvailable,startingPrice,currentPrice,expectedPrice,exteriorImages,interiorImages
      ,signature}
   
    dispatch(createlot(auctionId,propertyName,code,location,auctionDate,Number(mileage),keyAvailable,Number(startingPrice),Number(currentPrice),Number(expectedPrice),exteriorImages,interiorImages,vehicleType,seats,year,fuelType,numberOfDoors,signature))
   
    setshowLoading(!showLoading)

    setmodalMessage("Loading Please Wait.")
   
}

let paginatedLots=useMemo(()=>{
  const start=(currentPage-1)*itemsPerPage;
  const end=start+itemsPerPage
  return displayedLots.slice(start,end)
},[displayedLots,currentPage])

function handleFilterChange(e) {
  setfilter(e.target.value)
}
const totalPages=Math.ceil(displayedLots.length/itemsPerPage);

let pageNumbers=[...Array(totalPages).keys()].map(i=>i+1)



const handleDelete=(id)=>{
  dispatch(deletelot(id,signature))

}
useEffect(()=>{
if (deletelotRedux.success===true) {
  dispatch(getlots(id))
  dispatch({type:"DELETE_LOT_RESET"})
}
if (updateLot.success===true) {
  dispatch(getlots(id))
  dispatch({type:"UPDATE_LOT_RESET"})

}

if (createLot.success===true) {
console.log("hello data");
  dispatch(getlots(id))
  dispatch({type:"CREATE_LOT_RESET"})
  setTimeout(() => {
    setshowLoading(!showLoading)
   
  }, 2000);
 
  setmodalMessage("Item has been added succesfully")
 
}
if (createLot.loading===true) {
  setshowLoading(true)
  setmodalMessage("Loading Please Wait.")
  console.log("loading");
}
if(createLot.fail===true){
  setshowLoading(true)
  setmodalMessage("There is an error that happened whilst adding the lot please try again.")
}


},[deletelotRedux.success,updateLot,dispatch,createLot,setshowLoading,setmodalMessage])
const [editingId, seteditingId] = useState("")
const [tempInteriorImages, settempInteriorImages] = useState([])
const [tempExteriorImages, settempExteriorImages] = useState([])
const openEditModal=(lot)=>{
setisEditMode(true);
seteditingId(lot._id)

setformData({
  auctionId:id,
  propertyName:lot.propertyName,
  numberOfDoors:lot.numberOfDoors,
  currentPrice:lot.currentPrice,
  expectedPrice:lot.expectedPrice,
  startingPrice:lot.startingPrice,
  mileage:lot.mileage,
  auctionDate:lot.auctionDate,

  fuelType:lot.fuelType,
  vehicleType:lot.vehicleType,
  seats:lot.seats,
  year:lot.year,
  location:lot.location,
  mileage:lot.mileage,
  keyAvailable:lot.keyAvailable,
  exteriorImages:lot.exteriorImages,
  interiorImages:lot.interiorImages
 


 






})

setimages([...lot.exteriorImages,...lot.interiorImages])
settempInteriorImages([...lot.interiorImages])
settempExteriorImages([...lot.exteriorImages])



}
const openModal=(lot)=>{
  console.log(lot);
setisEditMode(true);
seteditingId(lot._id)

setformData({
  auction:id,
  propertyName:lot.propertyName,
  expectedPrice:lot.expectedPrice,
  currentPrice:lot.currentPrice,
  auctionLocation:lot.auctionLocation,
  auctionDate:lot. auctionDate,
  auctionTime:lot.auctionTime,
itemType:lot.itemType,
specs:lot.specs,


 


 






})

console.log(formData);


}
  function submitEdit(id) {
    let currentPrice=startingPrice;
    let inputData={   auction,propertyName,code,location,auctionDate,mileage,keyAvailable,startingPrice,currentPrice,expectedPrice,exteriorImages,interiorImages
      ,signature}

    dispatch(updatelot(formData?.propertyName,formData?.startingPrice,formData?.currentPrice,formData?.expectedPrice,formData?.mileage,id,signature))
   
}
const handleChange=(event)=>{
  setformData({...formData,[event.target.name]:event.target.value})
}

const [removedImages, setremovedImages] = useState([])
const [images, setimages] = useState([])
const handleRemoveImage=(image)=>{
  setremovedImages((prevRemovedImages)=>[...prevRemovedImages,image._id]);
  setimages((prevImages)=>prevImages.filter((img)=>img._id!==image._id))
}



function handleSubmit() {

  let formData=new FormData();
//  auction,propertyName,expectedPrice,currentPrice,startingPrice,itemType,code,lotImages,specs
  formData.append("auction",auctionId)
  formData.append("itemType",itemType);
  formData.append("propertyName",propertyName)
  formData.append("expectedPrice",expectedPrice)
  formData.append("currentPrice",currentPrice)
  formData.append("startingPrice",startingPrice)
  formData.append("code",code)

  formData.append("specs",JSON.stringify(specs));

lotImages.forEach((img)=>formData.append("lotImages",img))

dispatch(createlot(formData,signature))
setformData({})
}
let groupedLots=[];
let lotMap={}

useEffect(() => {
  dispatch(getlots(id))
  console.log(lots);
if(lots.loading) return console.log("loading")
if (lots.data) {
  lots.data.forEach((lot)=>{
    let lotId=lot._id;
    if (!lotMap[lotId]) {
      lotMap[lotId]={
        ...lot.data,
        combinedSpecs:{}
      };
      groupedLots.push(lotMap[lotId])
    }
    let parsedSpecs=JSON.parse(lot.specs);
    Object.assign(lotMap[lotId].combinedSpecs,parsedSpecs)
  })
  console.log(groupedLots);
}



}, [getlots])
console.log(formData);
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
    <h4 class="fw-bold py-3 mb-4">Auction </h4>

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
     <h5 class="mb-0">Auction Information</h5>
    
   </div>
   <div class="card-body">
     <form>
       <div class="row mb-3">
         <label class="col-sm-2 col-form-label" for="basic-default-name">Name</label>
         <div class="col-sm-10">
           <input type="text" class="form-control" disabled={true} value={data?.name} id="basic-default-name" placeholder="John Doe" />
         </div>
       </div>
       <div class="row mb-3">
         <label class="col-sm-2 col-form-label" for="basic-default-name">Type</label>
         <div class="col-sm-10">
           <input type="text" class="form-control" disabled={true} value={data?.type} id="basic-default-name" placeholder="John Doe" />
         </div>
       </div>
       {
        data?.type === "Onsite" && <>
       
           <div class="row mb-3">
         <label class="col-sm-2 col-form-label" for="basic-default-company">Location</label>
         <div class="col-sm-10">
           <input
             type="text"
             class="form-control"
             id="basic-default-company"
             placeholder="e.g. BidFest Kadoma"
             disabled={true} value={data?.location}
     
           />
         </div>
       </div>
           <div class="row mb-3">
         <label class="col-sm-2 col-form-label" for="basic-default-company">Start Time</label>
         <div class="col-sm-10">
           <input
             type="text"
             class="form-control"
             id="basic-default-company"
             placeholder="e.g. BidFest Kadoma"
             disabled={true} value={moment(data?.startDateTime).format("D MMMM YYYY HH:mm") }
     
           />
         </div>
       </div>
        </>
       }
       {
        data?.type === "Online" && <>
           <div class="row mb-3">
         <label class="col-sm-2 col-form-label" for="basic-default-company">Open Time</label>
         <div class="col-sm-10">
           <input
             type="text"
             class="form-control"
             id="basic-default-company"
             placeholder="e.g. BidFest Kadoma"
             disabled={true} value={moment(data?.openTime).format("D MMMM YYYY HH:mm")}
     
           />
         </div>
       </div>
           <div class="row mb-3">
         <label class="col-sm-2 col-form-label" for="basic-default-company">Close Time</label>
         <div class="col-sm-10">
           <input
             type="text"
             class="form-control"
             id="basic-default-company"
             placeholder="e.g. BidFest Kadoma"
             disabled={true} value={moment(data?.closeTime).format("D MMMM YYYY HH:mm")  }
     
           />
         </div>
       </div>
         
        </>
       }
 
       <div class="row mb-3">
         <label class="col-sm-2 col-form-label" for="basic-default-email">Auction Featured Image</label>
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
    <h4 class="fw-bold py-3 mb-4">Lots </h4>

<button  

   type="button"

    class="btn btn-danger"
    data-bs-toggle= "modal"
    data-bs-target="#basicModal"
     style={{
 padding:"0.2rem 2rem",
 height:"3rem",
 display:"flex",
 alignItems:"center",
 gap:"10px",
 alignContent:"center"
}} >
 <span>
 <FaPlus size={15}/>
 </span>

Add Lot
</button>
</div>
      
</>

        
  

         </div>
     

<div class="content-backdrop fade"></div>





<div class="modal fade" id="basicModal" tabindex="-1" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel1">Add Lot</h5>
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
          <label for="dobBasic" class="form-label">Select Lot Type</label>
          <select 
          value={itemType}
          onChange={
            (e)=>{




            setitemType(e.target.value)
            }
          } class="form-select" id="exampleFormControlSelect1" aria-label="Default select example">
<option value="">
  Select Lot Type
</option>
{
  Object.keys(CATEGORY_FIELDS).map((type)=>(
    <option key={type} value={type}>
{type}
    </option>
  ))
}

</select>
        </div>

 {
 itemType!== "" && (
   
   <div className='row' style={{
    marginBottom:"1rem"
   }}>

     <div class="row" style={{
    marginBottom:"1rem"
   }}>

    <label for="emailBasic" class="form-label">Property Name</label>
    <input onChange={(e)=>setpropertyName(e.target.value)}  type="text"  id="emailBasic" class="form-control" placeholder="Property Name" />
  </div>
     <div class="row" style={{
    marginBottom:"1rem"
   }}>
    <label for="emailBasic" class="form-label">Expected Selling Price</label>
    <input onChange={(e)=>setexpectedPrice(e.target.value)}  type="number"  id="emailBasic" class="form-control" placeholder="Expected Selling Price" />
  </div>
     <div class="row" style={{
    marginBottom:"1rem"
   }}>
    <label for="emailBasic" class="form-label">Initial Selling Price</label>
    <input onChange={(e)=>setstartingPrice(e.target.value)}  type="number"  id="emailBasic" class="form-control" placeholder="Initial Selling Price" />
  </div>
     <div class="row" style={{
    marginBottom:"1rem"
   }}>
    <label for="emailBasic" class="form-label">Current Price</label>
    <input onChange={(e)=>setcurrentPrice(e.target.value)}  type="number"  id="emailBasic" class="form-control" placeholder="Initial Current  Price" />
  </div>
    
     <div class="row" style={{
    marginBottom:"1rem"
   }}>
    <label for="emailBasic" class="form-label">Lot Images</label>
    <input onChange={(e)=>setlotImages([...e.target.files])} multiple accept='image/*' type="file"  id="emailBasic" class="form-control" placeholder="Mileage .." />
  </div>
    
    </div>
   


  )
 }
   
        {
          itemType && CATEGORY_FIELDS[itemType].map((field)=>(
            <div className="row">
                <div class="col mb-3" key={field}>
<label class="form-label" htmlFor="">{field}</label>
{
  field === "Additional Information" ? (
    <textarea rows={4}  class="form-control"  type="text" value={specs[field]||""} 
onChange={(e)=>handleSpecsChange(field,e.target.value)}
/> 
  ) : (<input  class="form-control"  type="text" value={specs[field]||""} 
  onChange={(e)=>handleSpecsChange(field,e.target.value)}
  />)
}





            </div>


            </div>
          
          ))
        }
   </div>

    </div>
    <div style={{
      display:"flex",
      justifyContent:"center"
    }} class="modal-footer">
    
      <button     data-bs-dismiss="modal" onClick={()=>{
handleSubmit()
setshowLoading(!showLoading)
setmodalMessage("Loading Please Wait.")
      }}  type="button" class="btn btn-primary">Add Lot</button>
    </div>
  </div>
</div>
</div>
 
 
<div class="modal fade" id="modalCenter" tabindex="-1" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="modalCenterTitle">{formData?.propertyName}</h5>
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
                                    <label for="nameWithTitle" class="form-label">Property Name</label>
                                    <input
                                      type="text"
                                      id="nameWithTitle"
                                      class="form-control"
                                     disabled={true}
                                      value={formData?.propertyName}
                                    />
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col mb-3">
                                    <label for="nameWithTitle" class="form-label">Current Price</label>
                                    <input
                                      type="text"
                                      id="nameWithTitle"
                                      class="form-control"
                                     disabled={true}
                                      value={formData?.currentPrice}
                                    />
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col mb-3">
                                    <label for="nameWithTitle" class="form-label">Expected Selling Price</label>
                                    <input
                                      type="text"
                                      id="nameWithTitle"
                                      class="form-control"
                                     disabled={true}
                                      value={formData?.expectedPrice}
                                    />
                                  </div>
                                </div>
                  
                                <div class="row">
                                  <div class="col mb-3">
                                    <label for="nameWithTitle" class="form-label">Starting Price</label>
                                    <input
                                      type="text"
                                      id="nameWithTitle"
                                      class="form-control"
                                     disabled={true}
                                      value={formData?.startingPrice}
                                    />
                                  </div>
                                </div>

                                {
                           formData?.specs &&       
                               Object.entries(JSON.parse(formData?.specs)).map(([key,value])=>(
                                
                                <div class="row">
                                  <div class="col mb-3">

                                    <label for="nameWithTitle" class="form-label">{key}</label>
                                    {
key=== "Additional Information" ? (
    <textarea rows={4}    type="text"
    id="nameWithTitle"
    class="form-control"
   disabled={true}
    value={value}
/> 
  ) : (<input    type="text"
  id="nameWithTitle"
  class="form-control"
 disabled={true}
  value={value}
  />)
}




                                  </div>
                                </div>

                               ))
                                }
                      
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
                                  Close
                                </button>
                             
                              </div>
                            </div>
                          </div>
                        </div>

















<div style={{
  display:"flex"
}}>
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
                            width:"500px",
                            height:"40px"
                          }} 
                        />
                              <button  
   type="button"


    className='btn btn-danger '
    style={{
     
      height:"45px"
    }} 
    >


Search
</button>

                      </div>
<div style={{
  width:"60%"
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
{
  /**      <div style={{
                      display:"flex",
                    

                      
                    }} >



                  <div style={{
                    display:"flex"
                  }} class="">
                  
                    <div style={{
                      display:"flex"
                    }} class="card-body demo-vertical-spacing demo-only-element">
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
       */
}
                  

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
{

lots.loading ? <SinglePageLoader/> : lots.error ? <SinglePageError/> :
paginatedLots?.map((item)=>{
return   <div class="col-md-6 col-lg-4 mb-3">
  <div class="card h-100">
  {
      item?.lotImages?.slice(0).map((photo,id)=>{
        if (id===1) {
          return  <img class="card-img-top" src={imageServerUrl+photo?.newPath} width={250} alt="Card image cap" />
        }
       
})
    }
   
    <div class="card-body">
      <h5 class="card-title">{item.propertyName}</h5>
      <p class="card-text">
       Current Price : ${item.currentPrice}
      </p>
<p style={{
  display:"flex",
  gap:"1rem"
}}>
        <button
                          type="button"
                          class="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#modalCenter"
                          onClick={()=>openModal(item)}
                        >
                      More Info
                        </button>

     
      <button  onClick={()=>{
   
  
  
   if (window.confirm(`Are you sure you want to delete the ${item.propertyName} ?`)) {
 dispatch(deletelot(item._id,signature))


  }


                         
                      }}
class="btn btn-danger">Delete</button>



<Link to={`/home/bidders/${item._id}`}  className='btn btn-success'>
Bids
</Link>

</p>
   
    </div>
  </div>
</div>



})

}        
          

                     




</div>
</div>

  )
}


export default Auction
