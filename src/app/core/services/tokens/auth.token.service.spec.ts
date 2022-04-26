import { TestBed } from '@angular/core/testing';

import { Auth.TokenService } from './auth.token.service';

describe('Auth.TokenService', () => {
  let service: Auth.TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Auth.TokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
