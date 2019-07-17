import movies from './movie_reducer';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    movies
})

export default rootReducer;