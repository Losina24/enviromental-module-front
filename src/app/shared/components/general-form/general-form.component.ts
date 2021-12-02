import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import FormElement from 'src/app/shared/models/FormElement';
import FormField from 'src/app/shared/models/FormField';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.scss']
})
export class GeneralFormComponent implements OnInit {

  @Output() formValues: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();
  @Input() formElement: FormElement
  formRecolector: Array<string> = new Array<string>();
  formError: string;

  constructor(
    private _cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  submit() {
      console.log('este es el form element', this.formElement)
      if( this.formElement.checkRequiredInputs(this.formRecolector) ) {
        this.formValues.emit(this.formRecolector)
      } else {
        this.formError = "Hay campos obligatorios que están vacíos.";
      }
  }
}
