import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCertificationRequestComponent } from './inventory-certification-request.component';

describe('InventoryCertificationRequestComponent', () => {
  let component: InventoryCertificationRequestComponent;
  let fixture: ComponentFixture<InventoryCertificationRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryCertificationRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryCertificationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
