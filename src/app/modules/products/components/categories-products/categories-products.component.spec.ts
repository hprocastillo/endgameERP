import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesProductsComponent } from './categories-products.component';

describe('CategoriesProductsComponent', () => {
  let component: CategoriesProductsComponent;
  let fixture: ComponentFixture<CategoriesProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesProductsComponent]
    });
    fixture = TestBed.createComponent(CategoriesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
