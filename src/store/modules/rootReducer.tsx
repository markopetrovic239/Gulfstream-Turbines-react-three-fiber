import { combineReducers } from 'redux';

//import system from './system/reducer';
import user from './user/reducer';

export default combineReducers({
  user,
});
