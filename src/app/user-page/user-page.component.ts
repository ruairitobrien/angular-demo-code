import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {dispatch, select} from '@angular-redux/store';
import {User} from './user.model';
import {UserActions} from './user.actions';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html'
})
export class UserPageComponent implements OnInit {

  @select() users$: Observable<User[]>;

  constructor(private userActions: UserActions) {
  }

  @dispatch()
  ngOnInit() {
    return this.userActions.fetchUsers();
  }

}
