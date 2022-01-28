import { combineReducers } from 'redux';
import authorizationReducer from './auth/authReducer';
import usersReducer from './users/usersReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  auth: authorizationReducer,
});

export default rootReducer;
