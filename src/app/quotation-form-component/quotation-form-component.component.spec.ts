import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationFormComponentComponent } from './quotation-form-component.component';

describe('QuotationFormComponentComponent', () => {
  let component: QuotationFormComponentComponent;
  let fixture: ComponentFixture<QuotationFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
