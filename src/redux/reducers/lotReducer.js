import { UPDATE_LOT_RESET,UPDATE_LOT_SUCCESS,UPDATE_LOT_REQUEST,UPDATE_LOT_FAIL,DELETE_LOT_RESET,DELETE_LOT_SUCCESS,DELETE_LOT_REQUEST,DELETE_LOT_FAIL,ADD_LOT_FAIL,ADD_LOT_REQUEST,ADD_LOT_SUCCESS,GET_LOTS_FAIL,GET_LOTS_REQUEST,GET_LOTS_SUCCESS } from "../constants/lot";

export function addLotReducer(state = {}, action) {
  switch (action.type) {
    case ADD_LOT_REQUEST:
      return { loading: true };
    case ADD_LOT_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case ADD_LOT_FAIL:
      return { loading: false, error: action.payload};
    default: return state;
  }
}
export function getLotsReducer(state = {}, action) {
  switch (action.type) {
    case GET_LOTS_REQUEST:
      return { loading: true };
    case GET_LOTS_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case GET_LOTS_FAIL:
      return { loading: false, error: action.payload};
    case "SORT_DATA":
      const sortedData=[...state.data];
      sortedData.sort((a,b)=>{
        if (action.order==="price-asc") {
          return a.currentPrice-b.currentPrice
        }
      })
      return {loading:false,data:sortedData,success:true}


    default: return state;
  }
}
export function deleteLotReducer(state = {
  loading:false,
  success:false,
  error:null,
  data:null
}, action) {
  switch (action.type) {
    case DELETE_LOT_REQUEST:
      return { loading: true };
    case DELETE_LOT_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case DELETE_LOT_FAIL:
      return { loading: false, error: action.payload};
    case DELETE_LOT_RESET:
    return   {loading:false,success:false,error:null}
 
    
    default: return state;
  }
}


export function updateLotReducer(state = {
  loading:false,
  success:false,
  error:null,
  data:null
}, action) {
  switch (action.type) {
    case UPDATE_LOT_REQUEST:
      return { loading: true };
    case UPDATE_LOT_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case UPDATE_LOT_FAIL:
      return { loading: false, error: action.payload};
      case UPDATE_LOT_RESET:
        return   {loading:false,success:false,error:null}
     
    default: return state;
  }
}