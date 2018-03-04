import {Component} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {User} from '../user.model';

@Component({
  selector: 'app-users-bad-way',
  templateUrl: './users-bad-way.component.html'
})
export class UsersBadWayComponent {

  @select(['userManagement', 'users']) users$: Observable<User[]>;

}
