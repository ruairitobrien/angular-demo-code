import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MockNgRedux, NgReduxTestingModule} from '@angular-redux/store/lib/testing';
import {NgRedux} from '@angular-redux/store';

import {UsersBadWayComponent} from './users-bad-way.component';
import {UserManagementActions} from '../user-management.actions';

describe('UsersBadWayComponent', () => {
  let component: UsersBadWayComponent;
  let fixture: ComponentFixture<UsersBadWayComponent>;
  let userManagementActions: UserManagementActions;
  let element: HTMLElement;
  let ngRedux;
  let usersSelector;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgReduxTestingModule],
      declarations: [UsersBadWayComponent],
      providers: [UserManagementActions]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    MockNgRedux.reset();
    usersSelector = MockNgRedux.getSelectorStub(['userManagement', 'users']);
    ngRedux = TestBed.get(NgRedux);
    spyOn(ngRedux, 'dispatch');

    fixture = TestBed.createComponent(UsersBadWayComponent);
    userManagementActions = TestBed.get(UserManagementActions);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch fetchUsers action', () => {
    expect(ngRedux.dispatch).toHaveBeenCalledWith(userManagementActions.fetchUsers());
  });

  it('should render users', () => {
    usersSelector.next([{id: 'one', name: 'First'}, {id: 'two', name: 'Second'}]);
    fixture.detectChanges();

    const userElements = element.querySelectorAll('li');

    expect(userElements[0].textContent).toContain('First');
    expect(userElements[1].textContent).toContain('Second');
  });

});
