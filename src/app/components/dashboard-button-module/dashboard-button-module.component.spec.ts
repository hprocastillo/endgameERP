import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardButtonModuleComponent } from './dashboard-button-module.component';

describe('DashboardButtonModuleComponent', () => {
  let component: DashboardButtonModuleComponent;
  let fixture: ComponentFixture<DashboardButtonModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardButtonModuleComponent]
    });
    fixture = TestBed.createComponent(DashboardButtonModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
