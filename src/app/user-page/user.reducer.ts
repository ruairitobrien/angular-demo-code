import { UserActions } from './user.actions';

export function userReducer(state = {}, action) {
  switch (action.type) {
    case UserActions.FETCH_USERS_SUCCEEDED:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
}
