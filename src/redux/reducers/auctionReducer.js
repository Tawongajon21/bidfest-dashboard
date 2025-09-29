import { DELETE_AUCTION_SUCCESS,DELETE_AUCTION_RESET,DELETE_AUCTION_REQUEST,DELETE_AUCTION_FAIL,UPDATE_AUCTION_SUCCESS,UPDATE_AUCTION_REQUEST,UPDATE_AUCTION_FAIL,GET_AUCTION_SUCCESS,GET_AUCTION_REQUEST,GET_AUCTION_FAIL,GET_AUCTIONS_SUCCESS,GET_AUCTIONS_REQUEST,GET_AUCTIONS_FAIL,ADD_AUCTION_SUCCESS,ADD_AUCTION_FAIL,ADD_AUCTION_REQUEST } from "../constants/auction";
export function addAuctionReducer(state = {}, action) {
  switch (action.type) {
    case ADD_AUCTION_REQUEST:
      return { loading: true };
    case ADD_AUCTION_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case ADD_AUCTION_FAIL:
    
      return { loading: false, error: action.payload};
    default: return state;
  }
}
export function getAuctionsReducer(state = {}, action) {
  switch (action.type) {
    case GET_AUCTIONS_REQUEST:
      return { loading: true };
    case GET_AUCTIONS_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case GET_AUCTIONS_FAIL:
    
      return { loading: false, error: action.payload};
    default: return state;
  }
}
export function getAuctionReducer(state = {}, action) {
  switch (action.type) {
    case GET_AUCTION_REQUEST:
      return { loading: true };
    case GET_AUCTION_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case GET_AUCTION_FAIL:
    
      return { loading: false, error: action.payload};
    default: return state;
  }
}
export function updateAuctionReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_AUCTION_REQUEST:
      return { loading: true };
    case UPDATE_AUCTION_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case UPDATE_AUCTION_FAIL:
    
      return { loading: false, error: action.payload};
    default: return state;
  }
}
export function deleteAuctionReducer(state = {  loading:false,success:false,error:null,data:null,fail:false}, action) {
  switch (action.type) {
    case DELETE_AUCTION_REQUEST:
      return { loading: true };
    case DELETE_AUCTION_SUCCESS:
      return { loading: false, data: action.payload,success:true,fail:false };
    case DELETE_AUCTION_FAIL:
    
      return { loading: false, error: action.payload,fail:true};

      case DELETE_AUCTION_RESET:
        return   {loading:false,success:false,error:null,fail:false}
    default: return state;
  }
}