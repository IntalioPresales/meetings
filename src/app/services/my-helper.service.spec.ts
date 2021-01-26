/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyHelperService } from './my-helper.service';

describe('Service: MyHelper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyHelperService]
    });
  });

  it('should ...', inject([MyHelperService], (service: MyHelperService) => {
    expect(service).toBeTruthy();
  }));
});
