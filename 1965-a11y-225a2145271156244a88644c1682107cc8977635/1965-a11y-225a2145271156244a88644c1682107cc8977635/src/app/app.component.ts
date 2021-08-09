import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'a11y-p1';
  public yesNoAnswer = 'no';
  public form!: FormGroup;
  /**
   *
   */
  constructor(private _fb: FormBuilder) {
    this.form = _fb.group({
      yesNoAnswer: [
        {
          value: 'yes',
          disabled: true,
        },
      ],
    });
  }

  submit() {
    console.log(
      `yesNoAnswer: `,
      this.form.get('yesNoAnswer')?.value ?? 'Controll not founded'
    );
  }
}
