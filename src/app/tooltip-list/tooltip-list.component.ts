import { Component, OnInit, AfterContentChecked, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import * as Moment from 'moment';
import { TooltipService } from '../tooltip-service.service';

export interface Rule {
  id: number,
  campaignUrl: string
}

@Component({
  selector: 'app-tooltip-list',
  templateUrl: './tooltip-list.component.html',
  styleUrls: ['./tooltip-list.component.scss']
})
export class TooltipListComponent implements OnInit, AfterContentChecked {
  public tooltips: Rule[] = [];
  public createAvailiable: boolean = true;

  constructor(
      readonly cd: ChangeDetectorRef,
      readonly tooltipService: TooltipService
    ) { }

  ngOnInit() {
    this.tooltipService.isEditAvailiable$.subscribe(value => this.createAvailiable = value)
  }

  ngAfterContentChecked() { // < ---- for approch One (see TooltipComponent)
    this.cd.detectChanges();
  }

  public addRule(): void {
    this.tooltips.push({
      campaignUrl: '', 
      id: Moment().unix()
    })
  }

  public removeRule(id: number): void {
    const index = this.tooltips.findIndex((item) => item.id === id)
    if (this.tooltips.length > 1) {
      this.tooltips.splice(index, 1);
    } else {
      alert('must be at least one')
    }
  }

  checkIfFormValid(status: string) {
    status == "VALID" ? this.createAvailiable = true : this.createAvailiable = false
  }

}
