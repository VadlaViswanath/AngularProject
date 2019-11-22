import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PbExComponent } from './pb-ex.component';

describe('PbExComponent', () => {
  let component: PbExComponent;
  let fixture: ComponentFixture<PbExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PbExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PbExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
