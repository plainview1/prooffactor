import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {
  private _isEditAvailiable = new BehaviorSubject<boolean>(true);
  public isEditAvailiable$ = this._isEditAvailiable.asObservable()
  constructor() { } // ---- chick

  changeEditAvailiable(value: string) {
    let editAvailiable: boolean
    value == "INVALID" ? editAvailiable = false : editAvailiable = true
    this._isEditAvailiable.next(editAvailiable)
  }
}
