import { SHOW_LOADING,HIDE_LOADING,RESET_LOADING} from "../constants/toast"
const initialState={
  
 percent:0,
 message:"",
 show:false,
 finished:false
}

export const loadingReducer=(state=initialState,action)=>{
switch (action.type) {
    case SHOW_LOADING:
        return {...state,percent:action.payload.percent,message:action.payload.message,show:action.payload.show,finished:action.payload.finished}
       
      
        case HIDE_LOADING:
            return {...state,show:false,progress:0}
        case RESET_LOADING:
            return {...state,message:action.payload.message,show:action.payload.show,finished:action.payload.finished,percent:action.payload.percent}
    default:
       return state;

}
}