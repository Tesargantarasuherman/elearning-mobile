import axios from "axios";
import { GET_ALL_BLOG } from "./types";

export const GetBlog = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'GET'
    }).then((res)=>res.json()).then((data)=>{
        dispatch({type:GET_ALL_BLOG,payload:data})
    });
    // axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res=>{
    //    dispatch({type:GET_ALL_BLOG,payload:res.data})
    // })
    // .catch((err) => {
    //     dispatch({ type: GET_ALL_BLOG, payload: [] })
    // })
}
