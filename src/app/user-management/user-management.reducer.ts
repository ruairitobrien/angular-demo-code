import {UserManagementActions} from './user-management.actions';

export function userManagementReducer(state = {}, action) {
  switch (action.type) {
    case UserManagementActions.FETCH_USERS_SUCCEEDED:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
}
