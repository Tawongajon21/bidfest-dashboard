import {ADD_AUCTION_SUCCESS,ADD_AUCTION_REQUEST,ADD_AUCTION_FAIL,GET_AUCTIONS_FAIL,GET_AUCTIONS_REQUEST,GET_AUCTIONS_SUCCESS,GET_AUCTION_FAIL,GET_AUCTION_REQUEST,GET_AUCTION_SUCCESS,UPDATE_AUCTION_FAIL,UPDATE_AUCTION_REQUEST,UPDATE_AUCTION_SUCCESS,DELETE_AUCTION_FAIL,DELETE_AUCTION_REQUEST,DELETE_AUCTION_SUCCESS } from "../constants/auction";
import {ADD_LOT_FAIL,ADD_LOT_REQUEST,ADD_LOT_SUCCESS,GET_LOTS_FAIL,GET_LOTS_REQUEST,GET_LOTS_SUCCESS,GET_LOT_FAIL,GET_LOT_REQUEST,GET_LOT_SUCCESS,UPDATE_LOT_FAIL,UPDATE_LOT_REQUEST,UPDATE_LOT_SUCCESS,DELETE_LOT_FAIL,DELETE_LOT_REQUEST,DELETE_LOT_SUCCESS} from "../constants/lot"

import axios from "axios";
import { baseUrl } from "./baseUrl";

import { SHOW_TOAST,HIDE_TOAST,RESET_TOAST,SHOW_LOADING,HIDE_LOADING, RESET_LOADING} from "../constants/toast";

  export const createlot = (formData,signature) => async (dispatch, getState) => {

  
    try {

          dispatch({ type: ADD_LOT_REQUEST ,payload: formData });
    
        const {data}  = await axios.post(`${baseUrl}lot/add-lot`,formData,
   
        {
          headers:{  
            
           
            
            "Authorization":`Bearer ${signature}`,
            "Content-Type":"multipart/form-data"
    },
    onUploadProgress:(progressEvent)=>{
        const percent= Math.round((progressEvent.loaded*100)/progressEvent.total)
     
       dispatch({type:SHOW_LOADING,payload:{percent,message:"Uploading please wait",show:true,finished:false}})
       // dispatch({type:SHOW_TOAST,payload:{percent,message:"Uploading please wait",show:true,finished:false}})
        //navigate("/home/auctions")
       
  if (progressEvent.loaded===progressEvent.total) {
    

  dispatch({type:RESET_LOADING,payload:{message:"Kindly note that the information has been uploaded successfully",show:true,finished:true,percent:0}})

    
  }
  
  
      }
        },
     
        
           
      
       ) 
     
          dispatch({ type:ADD_LOT_SUCCESS, payload: data });
      
      } catch (error) {
        dispatch({ type: ADD_LOT_FAIL, payload: error.message });
     
      }
    };
   
    export const getlots=(id)=>async(dispatch,getState)=>{

      dispatch({
          type:GET_LOTS_REQUEST
      });
   
  
      try {
        const {data}  = await axios.get(`${baseUrl}lot/get-lots/${id}`)  
           
      
      
   
     
            
  dispatch({type:GET_LOTS_SUCCESS,payload:data});
       } catch (error) {
        
      const message=  error
   
          dispatch({type:GET_LOTS_FAIL,payload:message})
  }
  
     
  }
    export const deletelot=(id,signature)=>async(dispatch,getState)=>{

      dispatch({
          type:DELETE_LOT_REQUEST
      });
   
  
      try {
        const {data}  = await axios.delete(`${baseUrl}lot/delete-lot/${id}`,
        {
          headers:{
            "Authorization":`Bearer ${signature}`
          }
        }
        )  
           
      
      
   
     
            
  dispatch({type:DELETE_LOT_SUCCESS,payload:data});
       } catch (error) {
        
      const message=  error
   
          dispatch({type:DELETE_LOT_FAIL,payload:message})
  }
  
     
  }

  export const updatelot =(propertyName,startingPrice,currentPrice,expectedPrice,mileage,id,signature)=>async(dispatch,getState)=>{

 
    dispatch({
              type:UPDATE_LOT_REQUEST
          });
       
    
          try {
    
            const {data}  = await axios.patch(`${baseUrl}lot/update-lot/${id}`,{propertyName,startingPrice,currentPrice,expectedPrice,mileage},{headers:{        
               
                
                "Authorization":`Bearer ${signature}`
        },
        onUploadProgress:(progressEvent)=>{
          const percent= Math.round((progressEvent.loaded*100)/progressEvent.total)
       
         dispatch({type:SHOW_LOADING,payload:{percent,message:"Uploading please wait",show:true,finished:false}})
         // dispatch({type:SHOW_TOAST,payload:{percent,message:"Uploading please wait",show:true,finished:false}})
          //navigate("/home/auctions")
         
    if (progressEvent.loaded===progressEvent.total) {
      
  
    dispatch({type:RESET_LOADING,payload:{message:"Kindly note that the information has been uploaded successfully",show:true,finished:true,percent:0}})
  
      
    }
    
    
        }
            }
            
               
          
           )  
          
       
         
                
      dispatch({type:UPDATE_LOT_SUCCESS,payload:data});
           } catch (error) {
          const message=  error.response&& error.response.data.message
              ? error.response.data.message
              : error.message
              dispatch({type:UPDATE_LOT_FAIL,payload:message})
      }
      
         
      }




    {


     /** 
       * 
  export const getlot =(id)=>async(dispatch,getState)=>{
 
    dispatch({
        type:GET_AUCTION_REQUEST
    });
 

    try {
      const {data}  = await axios.get(`${baseUrl}auction/get-auction/${id}`)      
         
    
    
 
   
          
dispatch({type:GET_AUCTION_SUCCESS,payload:data});
     } catch (error) {
    const message=  error.response&& error.response.data.message
        ? error.response.data.message
        : error.message
        dispatch({type:GET_AUCTION_FAIL,payload:message})
}

   
}
export const updatelot =(auctionData,id,signature)=>async(dispatch,getState)=>{

let formData= new FormData();
for(let key in auctionData){
if (key!=="images") {
  formData.append(key,auctionData[key])
}
if (auctionData.images&&auctionData.images[0]) {
  formData.append("images",auctionData.images[0])
}
}

dispatch({
          type:UPDATE_AUCTION_REQUEST
      });
   

      try {

        const {data}  = await axios.put(`${baseUrl}auction/update-auction/${id}`,auctionData,{headers:{        
           
            
            "Authorization":`Bearer ${signature}`,
            "Content-Type":"multipart/form-data"
    }
        }
        
           
      
       )  
      
   
     
            
  dispatch({type:UPDATE_AUCTION_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:UPDATE_AUCTION_FAIL,payload:message})
  }
  
     
  }

  export const deletelot =(id,signature)=>async(dispatch,getState)=>{

      dispatch({
          type:DELETE_AUCTION_REQUEST
      });
   
  
      try {
        const {data}  = await axios.delete(`${baseUrl}auction/delete-auction/${id}`,{headers:{        
           
            
            "Authorization":`Bearer ${signature}`
    }
        }
        
           
      
       )  

     
            
  dispatch({type:DELETE_AUCTION_SUCCESS,payload:data});
       } catch (error) {
        console.log(error);
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:DELETE_AUCTION_FAIL,payload:message})
  }
  
     
  }
       *  

export const getauctions =()=>async(dispatch,getState)=>{

      dispatch({
          type:GET_AUCTIONS_REQUEST
      });
   
  
      try {
        const {data}  = await axios.get(`${baseUrl}auction/get-auctions`)  
           
      
      
   
     
            
  dispatch({type:GET_AUCTIONS_SUCCESS,payload:data});
       } catch (error) {
        
      const message=  error
   
          dispatch({type:GET_AUCTIONS_FAIL,payload:message})
  }
  
     
  }
export const getauction =(id)=>async(dispatch,getState)=>{
 
      dispatch({
          type:GET_AUCTION_REQUEST
      });
   
  
      try {
        const {data}  = await axios.get(`${baseUrl}auction/get-auction/${id}`)      
           
      
      
   
     
            
  dispatch({type:GET_AUCTION_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:GET_AUCTION_FAIL,payload:message})
  }
  
     
  }
       * export const updateauction =(name,brand,model,sellingPrice,buyingPrice,quantityBought,quantitySold,quantityRemaining,year,productDescription,showOnEcommerce,images,id,signature)=>async(dispatch,getState)=>{
  console.log(name,brand,model,sellingPrice,buyingPrice,quantityBought,quantitySold,quantityRemaining,year,showOnEcommerce,images);
//let {name,brand,model,sellingPrice,buyingPrice,quantityBought,quantitySold,quantityRemaining,year,showOnEcommerce,id,signature}=inputData
      dispatch({
          type:UPDATE_PRODUCT_REQUEST
      });
   
//.log(token);
      try {

        const {data}  = await axios.patch(`${baseUrl}product/update-product/${id}`,{name,brand,model,sellingPrice,buyingPrice,quantityBought,quantitySold,quantityRemaining,year,productDescription,showOnEcommerce,images},{headers:{        
           
            
            "Authorization":`Bearer ${signature}`,
            "Content-Type":"multipart/form-data"
    }
        }
        
           
      
       )  
      
   
     
            
  dispatch({type:UPDATE_PRODUCT_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:UPDATE_PRODUCT_FAIL,payload:message})
  }
  
     
  }



      */
    }

 