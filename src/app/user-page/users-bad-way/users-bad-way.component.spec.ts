import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersBadWayComponent} from './users-bad-way.component';

describe('UsersBadWayComponent', () => {
  let component: UsersBadWayComponent;
  let fixture: ComponentFixture<UsersBadWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersBadWayComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersBadWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
