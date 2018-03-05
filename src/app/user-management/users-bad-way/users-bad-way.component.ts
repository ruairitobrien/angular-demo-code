import {Component, OnInit} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';

import {User} from '../user.model';
import {UserManagementActions} from '../user-management.actions';

@Component({
  selector: 'app-users-bad-way',
  templateUrl: './users-bad-way.component.html'
})
export class UsersBadWayComponent implements OnInit {

  @select(['userManagement', 'users']) users$: Observable<User[]>;

  constructor(private userManagementActions: UserManagementActions) {
  }

  @dispatch()
  ngOnInit() {
    return this.userManagementActions.fetchUsers();
  }

}
