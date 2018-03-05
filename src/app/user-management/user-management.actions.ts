import {Injectable} from '@angular/core';
import {User} from './user.model';
import {AppAction} from '../app-action';

@Injectable()
export class UserManagementActions {

  static FETCH_USERS = 'user-page/FETCH_USERS';
  static FETCH_USERS_SUCCEEDED = 'user-page/FETCH_USERS_SUCCEEDED';
  private static DELETE_USER = 'user-page/DELETE_USER';

  fetchUsers(): AppAction {
    return {
      type: UserManagementActions.FETCH_USERS
    };
  }

  fetchUsersSucceeded(users: User[]): AppAction {
    return {
      type: UserManagementActions.FETCH_USERS_SUCCEEDED,
      payload: users
    };
  }

  deleteUser(user: User) {
    return {
      type: UserManagementActions.DELETE_USER,
      payload: user
    };
  }
}
