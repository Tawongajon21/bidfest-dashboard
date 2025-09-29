const initialState={
    current:null,
    previous:null
}
export function routeReducer(state=initialState,action) {
    switch (action.type) {
        case "SET_ROUTE":
           return {
previous:state.current,
current:action.payload
            }
           
    
        default:
          return state
    }
}