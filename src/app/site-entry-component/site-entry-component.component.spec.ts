import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteEntryComponentComponent } from './site-entry-component.component';

describe('SiteEntryComponentComponent', () => {
  let component: SiteEntryComponentComponent;
  let fixture: ComponentFixture<SiteEntryComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteEntryComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteEntryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
