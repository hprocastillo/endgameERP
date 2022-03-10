import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesDailyListComponent } from './sales-daily-list.component';

describe('SalesDailyListComponent', () => {
  let component: SalesDailyListComponent;
  let fixture: ComponentFixture<SalesDailyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesDailyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesDailyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
