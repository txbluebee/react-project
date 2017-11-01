import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import PostsReducer from './reducer_posts';
import WeatherReducer from './reducer_weather';
import YoutubeReducer from './reducer_youtube';


const rootReducer = combineReducers({
    posts: PostsReducer,
    weather: WeatherReducer,
    videos: YoutubeReducer,
    form: formReducer
});

export default rootReducer;