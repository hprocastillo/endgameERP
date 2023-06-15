import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleProductsComponent } from './title-products.component';

describe('TitleProductsComponent', () => {
  let component: TitleProductsComponent;
  let fixture: ComponentFixture<TitleProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleProductsComponent]
    });
    fixture = TestBed.createComponent(TitleProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
