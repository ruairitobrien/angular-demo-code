import {combineReducers} from 'redux';

import {userReducer} from './user-page/user.reducer';

export const rootReducer = combineReducers({users: userReducer});
