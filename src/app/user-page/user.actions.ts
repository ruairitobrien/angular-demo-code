import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()
export class UserActions {

  static FETCH_USERS = 'user-page/FETCH_USERS';
  static FETCH_USERS_SUCCEEDED = 'user-page/FETCH_USERS_SUCCEEDED';

  fetchUsers() {
    return {
      type: UserActions.FETCH_USERS
    };
  }

  fetchUsersSucceeded(users: User[]) {
    return {
      type: UserActions.FETCH_USERS_SUCCEEDED,
      payload: users
    };
  }
}
