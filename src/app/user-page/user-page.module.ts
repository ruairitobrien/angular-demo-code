import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserPageComponent} from './user-page.component';
import {UserActions} from './user.actions';
import {UserEpic} from './user.epic';
import {UsersBadWayComponent} from './users-bad-way/users-bad-way.component';
import {UsersLessBadWayComponent} from './users-less-bad-way/users-less-bad-way.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UsersBadWayComponent,
    UsersLessBadWayComponent,
    UserPageComponent
  ],
  exports: [
    UserPageComponent
  ],
  providers: [
    UserActions,
    UserEpic
  ]
})
export class UserPageModule {
}
