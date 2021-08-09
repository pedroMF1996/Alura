import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from './shared/components/modal/services/modal.service';
import { ModalRef } from './shared/components/models/modal-ref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  title = 'a11y-p2';
  public firstName = '';
  public modalRef: ModalRef;
  public info = false;
  public form!: FormGroup;

  constructor(private modalService: ModalService, private _fb: FormBuilder) {}

  public ngOnInit() {
    this.form = this._fb.group({
      firstName: ['Flávio', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      info: [false],
    });
  }

  public show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details',
    });
  }

  public submit(): void {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form);
  }

  public isRequiredValid(nameControl: string): boolean {
    return (
      this.form.get(nameControl)?.touched &&
      this.form.get(nameControl)?.errors?.required
    );
  }
}
