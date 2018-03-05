import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../user.model';

@Component({
  selector: 'app-users-less-bad-way',
  templateUrl: './users-less-bad-way.component.html'
})
export class UsersLessBadWayComponent {

  @Input()
  users: User[] = [];

  @Output()
  onDeleteUser: EventEmitter<User> = new EventEmitter<User>();


  deleteUser(user: User) {
    this.onDeleteUser.emit(user);
  }

}
