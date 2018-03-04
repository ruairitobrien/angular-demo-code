import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgRedux, NgReduxModule} from '@angular-redux/store';
import {createLogger} from 'redux-logger';
import {combineEpics, createEpicMiddleware} from 'redux-observable';

import {AppComponent} from './app.component';
import {rootReducer} from './reducers';
import {UserPageModule} from './user-page/user-page.module';
import {UserEpic} from './user-page/user.epic';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    UserPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private userEpic: UserEpic,
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
