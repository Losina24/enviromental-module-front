import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import FormElement from 'src/app/shared/models/FormElement';
import FormField from 'src/app/shared/models/FormField';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.scss']
})
export class GeneralFormComponent implements OnInit, OnChanges {

  @Output() formValues: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();
  @Output() cancelAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() formElement: FormElement = new FormElement([]);
  formRecolector: Array<string> = new Array<string>();
  formError: string;

  constructor(
    private _cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let i = 0; i < this.formElement.getFormFields().length; i++) {
      const element = this.formElement.getFormFields()[i];
      this.formRecolector[i] = element.getValue();
    }
  }

  submit() {
      console.log('probando', this.formElement.checkRequiredInputs(this.formRecolector))
      if( this.formElement.checkRequiredInputs(this.formRecolector) ) {
        this.formValues.emit(this.formRecolector)
      } else {
        this.formError = "Hay campos obligatorios que están vacíos.";
      }
  }

  cancel() {
    this.cancelAction.emit(true)
  }
}
