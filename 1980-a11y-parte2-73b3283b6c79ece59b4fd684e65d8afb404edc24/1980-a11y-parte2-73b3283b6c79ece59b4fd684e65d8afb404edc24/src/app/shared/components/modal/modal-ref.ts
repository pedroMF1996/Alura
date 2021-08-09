import { ComponentRef } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

export class ModalRef {
  /**
   *
   */
  constructor(private _componentRef: ComponentRef<ModalComponent>) {}
  public close(): void {
    this._componentRef.destroy();
  }
}
