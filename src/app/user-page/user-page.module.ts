import {NgModule} from '@angular/core';

import {UserPageComponent} from './user-page.component';
import {UserActions} from './user.actions';
import {UserEpic} from './user.epic';

@NgModule({
  declarations: [
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
