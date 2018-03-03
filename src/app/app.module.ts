import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgRedux, NgReduxModule} from '@angular-redux/store';
import {createLogger} from 'redux-logger';

import {AppComponent} from './app.component';
import {rootReducer} from './reducers';
import {UserPageModule} from './user-page/user-page.module';

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
  constructor(ngRedux: NgRedux<{}>) {
    ngRedux.configureStore(rootReducer, {}, [createLogger()]);
  }
}
