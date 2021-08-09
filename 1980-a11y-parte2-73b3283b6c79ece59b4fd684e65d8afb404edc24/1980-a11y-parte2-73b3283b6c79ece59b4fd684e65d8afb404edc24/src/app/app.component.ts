import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalRef } from './shared/components/modal/modal-ref';
import { ModalService } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'a11y-p2';
  public firstName = 'Flavio';
  @ViewChild('modal')
  public modalTemplateRef: TemplateRef<any>;

  public modalRef: ModalRef;
  /**
   *
   */
  constructor(private _modalService: ModalService) {}
  show() {
    this.modalRef = this._modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details',
    });
  }
}
