import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import usersReducer from './users/usersReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
});

export default rootReducer;
