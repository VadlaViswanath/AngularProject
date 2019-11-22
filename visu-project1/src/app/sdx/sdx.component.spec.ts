import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdxComponent } from './sdx.component';

describe('SdxComponent', () => {
  let component: SdxComponent;
  let fixture: ComponentFixture<SdxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
