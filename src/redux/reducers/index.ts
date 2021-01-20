import { combineReducers } from 'redux';
import { movieReducers } from './movieReducer';
import { searchReducer } from './searchReducer';


export default combineReducers({
    searchReducer,
    movieReducers
})