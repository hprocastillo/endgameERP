import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomersItemComponent } from './list-customers-item.component';

describe('ListCustomersItemComponent', () => {
  let component: ListCustomersItemComponent;
  let fixture: ComponentFixture<ListCustomersItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCustomersItemComponent]
    });
    fixture = TestBed.createComponent(ListCustomersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
