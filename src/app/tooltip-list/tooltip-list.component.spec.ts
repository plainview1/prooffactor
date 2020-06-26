import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipListComponent } from './tooltip-list.component';
import { TooltipServiceStab } from '../tooltip-service.service.spec';
import { TooltipService } from '../tooltip-service.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TooltipListComponent', () => {
  let component: TooltipListComponent;
  let fixture: ComponentFixture<TooltipListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipListComponent ],
      providers: [{ provide: TooltipService, useValue: TooltipServiceStab }],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipListComponent);
    component = fixture.componentInstance;
    component.tooltips = [{ id: 228, campaignUrl: 'pornhub.com' }]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('New input field should be added after each click on "Add" button', () => {
    expect(component).toBeTruthy(); // tbd
  });
  
});
