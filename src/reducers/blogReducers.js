import { GET_ALL_BLOG } from "../actions/types";

const INITIAL_STATE ={
    blog:[]
}

export default(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case GET_ALL_BLOG:
            return { ...state,blog:action.payload};    
        default:
            return state;
    }
}