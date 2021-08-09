import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FocusBackModule } from '../../directives/focus-back/focus-back.module';
import { FocusTrapModule } from '../../directives/focus-trap/focus-trap.module';

import { ModalComponent } from './modal.component';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    FocusTrapModule,
    FocusBackModule,
    BrowserAnimationsModule,
  ],
  exports: [ModalComponent],
  providers: [ModalService],
})
export class ModalModule {}
