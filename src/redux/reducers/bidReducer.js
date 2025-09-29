import {GET_BIDS_FAIL,GET_BIDS_REQUEST,GET_BIDS_SUCCESS} from "../constants/bids";


export function getBidsReducer(state = {loading:true}, action) {
    switch (action.type) {
      case GET_BIDS_REQUEST:
        return { loading: true };
      case GET_BIDS_SUCCESS:
        return { loading: false, data: action.payload };
      case GET_BIDS_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }