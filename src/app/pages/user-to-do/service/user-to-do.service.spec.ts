import { TestBed } from '@angular/core/testing';

import { UserToDoService } from './user-to-do.service';

describe('UserToDoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserToDoService = TestBed.get(UserToDoService);
    expect(service).toBeTruthy();
  });
});
