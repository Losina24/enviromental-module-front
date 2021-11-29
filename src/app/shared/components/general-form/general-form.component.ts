import { Component, Input, OnInit } from '@angular/core';
import FormElement from 'src/app/shared/models/FormElement';
import FormField from 'src/app/shared/models/FormField';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.scss']
})
export class GeneralFormComponent implements OnInit {

  @Input() formElement: FormElement
  formRecolector: Array<string> = new Array<string>();

  constructor() { }

  ngOnInit(): void {
  }

  submit() {    
    
    /* this._service.storeGateway(this.formRecolector[0], this.formRecolector[1], this.formRecolector[2], this.formRecolector[3], this.formRecolector[4]).subscribe((res: any) => {
      if(res.http == 200) {
        alert("Gateway creado")
        this._router.navigateByUrl('/dash/gestion/gateways')
      } else {
        alert("Hay algun error")
      }
    }) */
  }
}
