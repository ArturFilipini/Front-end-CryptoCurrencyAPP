import { TestBed } from '@angular/core/testing';

import { GalleryServicesService } from './gallery-services.service';

describe('GalleryServicesService', () => {
  let service: GalleryServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
