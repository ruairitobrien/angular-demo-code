import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersLessBadWayComponent} from './users-less-bad-way.component';

describe('UsersLessBadWayComponent', () => {
  let component: UsersLessBadWayComponent;
  let fixture: ComponentFixture<UsersLessBadWayComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersLessBadWayComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersLessBadWayComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  it('should render users', () => {
    component.users = [{id: 'one', name: 'First'}, {id: 'two', name: 'Second'}];
    fixture.detectChanges();

    const userElements = element.querySelectorAll('li');

    expect(userElements[0].textContent).toContain('First');
    expect(userElements[1].textContent).toContain('Second');
  });

});
