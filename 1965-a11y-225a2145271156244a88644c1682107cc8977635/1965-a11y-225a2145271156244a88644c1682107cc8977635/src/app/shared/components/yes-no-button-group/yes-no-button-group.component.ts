import { fn } from '@angular/compiler/src/output/output_ast';
import { EventEmitter } from '@angular/core';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoButtonGroupComponent),
    },
  ],
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {
  @Input()
  public value: string = null;

  @Input()
  public label: string = '';

  @Input()
  public disabled: boolean = false;

  public id!: string;
  public options = YesNoButtonGroupOptions;
  public valueChange!: EventEmitter<string>;
  public onChange = (value: string) => {
    this.valueChange.emit(value);
  };
  public onTouched = () => {};
  constructor(private _uniqueIdService: UniqueIdService) {
    this.id = this._uniqueIdService.generateUniqueIdWithPrefix(
      'yes-no-button-group'
    );
  }

  public writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
    this.valueChange = new EventEmitter<string>();
  }

  activate(value: string): void {
    this.writeValue(value);
  }
  isChecked(valor: YesNoButtonGroupOptions): boolean {
    return this.value === valor;
  }
}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no',
}
