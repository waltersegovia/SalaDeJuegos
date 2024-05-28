import { TestBed } from '@angular/core/testing';

import { ServicioPalabrasService } from './servicio-palabras.service';

describe('ServicioPalabrasService', () => {
  let service: ServicioPalabrasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPalabrasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
