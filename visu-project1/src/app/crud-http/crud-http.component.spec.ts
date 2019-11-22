import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudHttpComponent } from './crud-http.component';

describe('CrudHttpComponent', () => {
  let component: CrudHttpComponent;
  let fixture: ComponentFixture<CrudHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
