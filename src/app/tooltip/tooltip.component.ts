import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Rule } from '../tooltip-list/tooltip-list.component';
import { FormControl, Validators } from '@angular/forms';
import { TooltipService } from '../tooltip-service.service';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  @Input() public model: Rule;
  @Output() public deleteTooltip = new EventEmitter<number>()
  @Output() public isFormValid = new EventEmitter<string>(true); // <--- only for approach Two

  constructor(readonly tooltipService: TooltipService) { }
  ruleControl: FormControl
  ngOnInit() {
    this.ruleControl = new FormControl(this.model.campaignUrl, [Validators.required]);
    this.approachOne()
    // this.approachTwo()
  }

  private approachOne() {
    // Using BehaviorSubject - RxJs
    this.tooltipService.changeEditAvailiable(this.ruleControl.status)
    this.ruleControl.statusChanges.subscribe(status => this.tooltipService.changeEditAvailiable(status));
  }

  private approachTwo() {
    // Using EventEmitter
    this.isFormValid.emit(this.ruleControl.status);
    this.ruleControl.statusChanges.subscribe(status => this.isFormValid.emit(status));
  }

  onDelete() {
    this.deleteTooltip.emit(this.model.id);
  }

}
