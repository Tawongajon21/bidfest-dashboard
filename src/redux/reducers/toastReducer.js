import { SHOW_TOAST,HIDE_TOAST,RESET_TOAST } from "../constants/toast"
const initialState={
  
 percent:0,
 message:"",
 show:false,
 finished:false
}

export const toastReducer=(state=initialState,action)=>{
switch (action.type) {
    case SHOW_TOAST:
        return {...state,percent:action.payload.percent,message:action.payload.message,show:action.payload.show,finished:action.payload.finished}
       
      
        case HIDE_TOAST:
            return {...state,show:false,progress:0}
        case RESET_TOAST:
            return {...state,message:action.payload.message,show:action.payload.show,finished:action.payload.finished,percent:action.payload.percent}
    default:
       return state;

}
}