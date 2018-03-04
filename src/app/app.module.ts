import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgRedux, NgReduxModule} from '@angular-redux/store';
import {createLogger} from 'redux-logger';
import {combineEpics, createEpicMiddleware} from 'redux-observable';

import {AppComponent} from './app.component';
import {rootReducer} from './reducers';
import {UserManagementModule} from './user-management/user-management.module';
import {UserManagementEpic} from './user-management/user-management.epic';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    UserManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private userEpic: UserManagementEpic,
              ngRedux: NgRedux<{}>) {

    const epics = combineEpics(
      this.userEpic.fetchUsers
    );

    const middlewares = [
      createEpicMiddleware(epics),
      createLogger()
    ];

    ngRedux.configureStore(rootReducer, {}, middlewares);
  }
}
