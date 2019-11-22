import { TestBed } from '@angular/core/testing';

import { Login3Service } from './login3.service';

describe('Login3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Login3Service = TestBed.get(Login3Service);
    expect(service).toBeTruthy();
  });
});
