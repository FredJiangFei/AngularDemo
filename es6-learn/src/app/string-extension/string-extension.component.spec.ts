import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringExtensionComponent } from './string-extension.component';

describe('StringExtensionComponent', () => {
  let component: StringExtensionComponent;
  let fixture: ComponentFixture<StringExtensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringExtensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
