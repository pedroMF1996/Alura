import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appDisablelControl]',
})
export class DisableControlDirective implements OnChanges {
  @Input()
  appDisablelControl: boolean = false;
  /**
   *
   */
  constructor(private _ngControl: NgControl) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.appDisablelControl) {
      const action = this.appDisablelControl ? 'disable' : 'enable';
      this._ngControl.control[action]();
    }
  }
}
