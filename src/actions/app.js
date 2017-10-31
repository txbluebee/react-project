import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts'
const API_KEY = '?key=lily1234'

export function fetchPosts(){
    const url = `${ROOT_URL}${API_KEY}`;
    const request = axios.get(url);
    console.log(request);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}