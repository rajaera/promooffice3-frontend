import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderObjectComponent } from './order-object.component';

describe('OrderObjectComponent', () => {
  let component: OrderObjectComponent;
  let fixture: ComponentFixture<OrderObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
