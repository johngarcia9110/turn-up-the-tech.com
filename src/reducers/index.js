import { combineReducers } from 'redux';
import user from './reducer_user';
import laptops from './reducer_laptops';

export default combineReducers({user, laptops})