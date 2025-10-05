import {LOGOUT} from "../constants/logout"
import { baseUrlFrontend } from "../../frontend-url";
export const logout = (role) => (dispatch) => {
    if (role==="developer") {
        localStorage.clear('devInfo');

        dispatch({ type: LOGOUT })
        window.location.href=`${baseUrlFrontend}/login`
    }else if (role==="manager") {
        localStorage.clear('managerInfo');
        dispatch({ type: LOGOUT })
        window.location.href=`${baseUrlFrontend}/login`
    }else if(role==="admin"){
        localStorage.clear('adminInfo');
        dispatch({ type: LOGOUT })
        window.location.href=`${baseUrlFrontend}/login`
    }else{
        localStorage.clear('cashierInfo');
        dispatch({ type: LOGOUT })
        window.location.href=`${baseUrlFrontend}/login`
    }
 
  }