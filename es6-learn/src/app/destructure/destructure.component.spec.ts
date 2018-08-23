import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestructureComponent } from './destructure.component';

describe('DestructureComponent', () => {
  let component: DestructureComponent;
  let fixture: ComponentFixture<DestructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
