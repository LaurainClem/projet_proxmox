import { TestBed } from '@angular/core/testing';

import { ProxmoxService } from './proxmox.service';

describe('ProxmoxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProxmoxService = TestBed.get(ProxmoxService);
    expect(service).toBeTruthy();
  });
});
