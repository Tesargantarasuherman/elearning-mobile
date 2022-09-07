import axios from "axios";
import { GET_ALL_BLOG } from "./types";

export const GetBlog = () => (dispatch) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res=>{
        dispatch({type:GET_ALL_BLOG,payload:res.data})
    })
}
