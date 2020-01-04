import {combineReducers} from 'redux';
import PostReducer from './PostReducer'
import userReducers from './userReducers';

export default combineReducers({
    posts : PostReducer,
    users: userReducers
});

