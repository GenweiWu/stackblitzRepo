import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-choose-panel',
  templateUrl: './choose-panel.component.html',
  styleUrls: ['./choose-panel.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChoosePanelComponent),  // replace name as appropriate
      multi: true
    }
  ]
})
export class ChoosePanelComponent implements OnInit, ControlValueAccessor {
  @Input() title: string;
  @Input() values: string[];
  _currentValue: string;

  get currentValue() {
    return this._currentValue;
  }

  set currentValue(_v) {
    if (this._currentValue != _v) {
      this._currentValue = _v;
      this.onChangeCallback(_v);
    }

  }

  onTouchedCallback = () => { };
  onChangeCallback = (_: any) => { };
  constructor() { }

  ngOnInit() {
  }

  //Set touched on blur
  onBlur() {
    this.onTouchedCallback();
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this._currentValue) {
      this._currentValue = value;
    }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}