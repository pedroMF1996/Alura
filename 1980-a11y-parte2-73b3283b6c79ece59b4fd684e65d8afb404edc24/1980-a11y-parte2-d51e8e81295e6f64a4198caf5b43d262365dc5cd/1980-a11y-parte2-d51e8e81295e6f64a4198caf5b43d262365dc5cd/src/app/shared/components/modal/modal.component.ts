import { AfterViewInit, Component, HostBinding } from '@angular/core';
import { fade } from '../../animations/fade';
import { ModalRef } from '../models/modal-ref';
import { ModalConfig } from './interfaces/modal-config';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['modal.component.scss'],
  animations: [fade],
})
export class ModalComponent {
  @HostBinding('@fade') public fade = true;
  public config: ModalConfig;
  public modalRef: ModalRef;
}
