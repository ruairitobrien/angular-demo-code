import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {Injectable} from '@angular/core';
import {UserManagementActions} from './user-management.actions';
import {Observable} from 'rxjs/Observable';
import {User} from './user.model';

@Injectable()
export class UserManagementEpic {
  fetchUsers = (action$) => {
    return action$.ofType(UserManagementActions.FETCH_USERS)
      .mergeMap(() => {
        return this.pretendToGetUsers()
          .map(this.userActions.fetchUsersSucceeded);
      });
  }

  constructor(private userActions: UserManagementActions) {
  }

  pretendToGetUsers(): Observable<User[]> {
    const users: User[] = [{id: 'one', name: 'First Person'}, {id: 'two', name: 'Second Person'}];
    return Observable.of(users);
  }

}
