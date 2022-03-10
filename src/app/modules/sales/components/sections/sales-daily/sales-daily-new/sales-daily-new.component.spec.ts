import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesDailyNewComponent } from './sales-daily-new.component';

describe('SalesDailyNewComponent', () => {
  let component: SalesDailyNewComponent;
  let fixture: ComponentFixture<SalesDailyNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesDailyNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesDailyNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
