import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appKmItem]',
})
export class KeyboardManagedItemDirective {
  /**
   *
   */

  @Output()
  public focused!: EventEmitter<void>;

  constructor(private _elementRef: ElementRef<HTMLElement>) {
    this.focused = new EventEmitter();
  }

  public focus(): void {
    this._elementRef.nativeElement.focus();
    this.focused.emit();
  }

  public isFocused(): boolean {
    return this._elementRef.nativeElement === document.activeElement;
  }
}
