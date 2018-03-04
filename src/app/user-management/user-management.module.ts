import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserManagementComponent} from './user-management.component';
import {UserManagementActions} from './user-management.actions';
import {UserManagementEpic} from './user-management.epic';
import {UsersBadWayComponent} from './users-bad-way/users-bad-way.component';
import {UsersLessBadWayComponent} from './users-less-bad-way/users-less-bad-way.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UsersBadWayComponent,
    UsersLessBadWayComponent,
    UserManagementComponent
  ],
  exports: [
    UserManagementComponent
  ],
  providers: [
    UserManagementActions,
    UserManagementEpic
  ]
})
export class UserManagementModule {
}
