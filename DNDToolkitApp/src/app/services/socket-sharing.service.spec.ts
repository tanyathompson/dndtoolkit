import { TestBed } from '@angular/core/testing';

import { SocketSharingService } from './socket-sharing.service';

describe('SocketSharingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocketSharingService = TestBed.get(SocketSharingService);
    expect(service).toBeTruthy();
  });
});
