import axios from "axios";
import { baseUrl } from "./baseUrl";
import {GET_BIDS_FAIL,GET_BIDS_REQUEST,GET_BIDS_SUCCESS} from "../constants/bids"


    export const getbids=(id,signature)=>async(dispatch,getState)=>{

        dispatch({
            type:GET_BIDS_REQUEST
        });
     
    
        try {
          const {data}  = await axios.get(`${baseUrl}bid/get-bids/${id}`,
          {
headers:{
    Authorization:`Bearer ${signature}`
}
          })  
             
        
        
     
       
              
    dispatch({type:GET_BIDS_SUCCESS,payload:data});
         } catch (error) {
          
        const message=  error
     
            dispatch({type:GET_BIDS_FAIL,payload:message})
    }
    
       
    }