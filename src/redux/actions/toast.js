export const SHOW_TOAST="SHOW_TOAST"
export const UPDATE_PROGRESS="UPDATE_PROGRESS"
export const HIDE_TOAST="HIDE_TOAST"

export const showToast=()=>({
    type:SHOW_TOAST

});
export const updateProgress=(progress)=>({type:UPDATE_PROGRESS,progress,show:true});
export const hideToast=()=>({type:HIDE_TOAST})