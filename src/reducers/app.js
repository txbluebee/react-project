import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import PostsReducer from './reducer_posts';
import WeatherReducer from './reducer_weather';


const rootReducer = combineReducers({
    posts: PostsReducer,
    weather: WeatherReducer,
    form: formReducer
});

export default rootReducer;