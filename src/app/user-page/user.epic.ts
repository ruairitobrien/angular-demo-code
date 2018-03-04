import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {Injectable} from '@angular/core';
import {UserActions} from './user.actions';
import {Observable} from 'rxjs/Observable';
import {User} from './user.model';

@Injectable()
export class UserEpic {
  constructor(private userActions: UserActions) {
  }

  fetchUsers = (action$) => {
    return action$.ofType(UserActions.FETCH_USERS)
      .mergeMap(() => {
        return this.pretendToGetUsers()
          .map(this.userActions.fetchUsersSucceeded);
      });
  }

  pretendToGetUsers(): Observable<User[]> {
    const users: User[] = [{id: 'one', name: 'First Person'}, {id: 'two', name: 'Second Person'}];
    return Observable.of(users);
  }

}
