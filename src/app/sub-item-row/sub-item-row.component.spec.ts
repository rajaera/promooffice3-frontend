import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubItemRowComponent } from './sub-item-row.component';

describe('SubItemRowComponent', () => {
  let component: SubItemRowComponent;
  let fixture: ComponentFixture<SubItemRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubItemRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubItemRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
