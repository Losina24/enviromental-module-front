import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import FormElement from 'src/app/shared/models/FormElement';
import FormField from 'src/app/shared/models/FormField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { Router } from '@angular/router';
import { ManagementGatewaysService } from '../management-gateways.service';

enum InputType {
  Text = "text",
  Email = "email",
  Number = "number",
  Date = "date",
  Pass = "password",
  Select = "select"
}

@Component({
  selector: 'app-management-gateway-form',
  templateUrl: './management-gateway-form.component.html',
  styleUrls: ['./management-gateway-form.component.scss']
})
export class ManagementGatewayFormComponent implements OnInit, OnChanges {
  
  formElement: FormElement
  formRecolector: Array<string> = new Array<string>();

  constructor(
    private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef,
    private _service: ManagementGatewaysService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._titleUpdaterService.changeTitle("Crear gateway");
    this.generateFormElements();
  }

  ngOnChanges() {
    this.generateFormElements();
  }

  generateFormElements() {
    let ff1 = new FormField("Nombre del gateway", "Escribe un nombre", InputType.Text, "name");
    let ff2 = new FormField("Mac del gateway", "Escribe una dirección MAC", InputType.Text, "mac");
    let ff3 = new FormField("Ayuntamiento", "Elige un ayuntamiento", InputType.Select, "councilId", true, [[1, "nameXPUT"],[2, "ayuntamiento gandia"], [3, "ayuntamiento alcoy"], [7, "Ayuntamiento de prueba"]]);
    let ff4 = new FormField("Latitud", "Escribe una latitud", InputType.Text, "latitude");
    let ff5 = new FormField("Longitud", "Escribe una longitud", InputType.Text, "longitude");

    this.formElement = new FormElement([ff1, ff2, ff3, ff4, ff5])

    this._cdr.detectChanges()
  }

  submit() {    
    this._service.storeGateway(this.formRecolector[0], this.formRecolector[1], this.formRecolector[2], this.formRecolector[3], this.formRecolector[4]).subscribe((res: any) => {
      if(res.http == 200) {
        alert("Gateway creado")
        this._router.navigateByUrl('/dash/gestion/gateways')
      } else {
        alert("Hay algun error")
      }
    })
  }
}