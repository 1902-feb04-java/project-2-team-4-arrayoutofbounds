import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighInventoryComponent } from './high-inventory.component';

describe('HighInventoryComponent', () => {
  let component: HighInventoryComponent;
  let fixture: ComponentFixture<HighInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
