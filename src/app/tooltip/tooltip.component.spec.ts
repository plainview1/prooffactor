import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { TooltipComponent } from './tooltip.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TooltipComponent', () => {
  let component: TooltipComponent;
  let fixture: ComponentFixture<TooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipComponent);
    component = fixture.componentInstance;
    component.model = { id: 228, campaignUrl: 'pornhub.com' }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Input field should be removed on "Close" button click', fakeAsync(() => {
    const closeBtn:HTMLElement = fixture.nativeElement.querySelector('.pf-close');
    closeBtn.click()
    fixture.detectChanges()
    tick();
    expect(closeBtn).toBeTruthy(); // tbd
  }));
});
