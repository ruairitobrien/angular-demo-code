import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersLessBadWayComponent} from './users-less-bad-way.component';

describe('UsersBadWayComponent', () => {
  let component: UsersLessBadWayComponent;
  let fixture: ComponentFixture<UsersLessBadWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersLessBadWayComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersLessBadWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
