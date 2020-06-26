import { TestBed } from '@angular/core/testing';

import { TooltipService } from './tooltip-service.service';
import { of } from 'rxjs';

describe('TooltipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TooltipService = TestBed.get(TooltipService);
    expect(service).toBeTruthy();
  });
});

export const TooltipServiceStab: Partial<TooltipService> = {
  isEditAvailiable$: of(true),
  changeEditAvailiable: () => {}
}
