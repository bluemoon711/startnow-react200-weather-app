import { combineReducers } from 'redux';
import searchReducer from './components/SearchEntries/searchReducer';

const rootReducer = combineReducers({
    search: searchReducer
});

export default rootReducer;
