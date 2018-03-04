import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {dispatch, select} from '@angular-redux/store';
import {User} from './user.model';
import {UserManagementActions} from './user-management.actions';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html'
})
export class UserManagementComponent implements OnInit {

  @select(['userManagement', 'users']) users$: Observable<User[]>;

  constructor(private userManagementActions: UserManagementActions) {
  }

  @dispatch()
  ngOnInit() {
    return this.userManagementActions.fetchUsers();
  }

}
