import axios from 'axios';
import YoutubeSearch from 'youtube-api-search';
export const FETCH_VIDEOS = 'fetch_vidoes';

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video".'
const API_KEY = '&key=AIzaSyBR3z8KY75KLLNUDhXBiQFTIB4i9NejoIY';

export function fetchVideos(term){
    const url = `${ROOT_URL}${API_KEY}&q=${term}`;
    const request = axios.get(url);
    console.log(request);
    return {
        type: FETCH_VIDEOS,
        payload: request
    }
}