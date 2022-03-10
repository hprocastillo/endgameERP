import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesDailyViewComponent } from './sales-daily-view.component';

describe('SalesDailyViewComponent', () => {
  let component: SalesDailyViewComponent;
  let fixture: ComponentFixture<SalesDailyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesDailyViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesDailyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
