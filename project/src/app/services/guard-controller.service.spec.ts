import { TestBed } from '@angular/core/testing';

import { GuardControllerService } from './guard-controller.service';

describe('GuardControllerService', () => {
  let service: GuardControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
