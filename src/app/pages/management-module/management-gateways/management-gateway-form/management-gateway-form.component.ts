import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import FormElement from 'src/app/shared/models/FormElement';
import FormField from 'src/app/shared/models/FormField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { Router } from '@angular/router';
import { ManagementGatewaysService } from '../management-gateways.service';
import { PopupMessageService } from 'src/app/shared/components/popup-message/popup-message.service';

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
    private _router: Router,
    private _popupMessageService: PopupMessageService
  ) { }

  ngOnInit(): void {
    if(this.isUpdate() > 0) {
      this._titleUpdaterService.changeTitle("Editar gateway");
      this.generateFormElements();
    } else {
      this._titleUpdaterService.changeTitle("Crear gateway");
      this.generateFormElements();
    }
  }

  ngOnChanges() {
    if(this.isUpdate() > 0) {
      this._titleUpdaterService.changeTitle("Editar gateway");
      this.generateFormElements();
    } else {
      this._titleUpdaterService.changeTitle("Crear gateway");
      this.generateFormElements();
    }
  }

  isUpdate() {
    const url = this._router.url.split('/').slice(1);
    const id = parseInt(url[url.length - 1]);
    
    if(url != undefined && id > 0) {
      return id
    } else {
      return 0
    }
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

  submit(formValues: Array<string>) {
    this._router.navigateByUrl('/dash/gestion/gateways')
    this._popupMessageService.sendMessage(["¡Bien!", "El dispositivo ha sido creado correctamente", true])

    /* this._service.storeEnviromentalDevice(formValues[0], formValues[1], formValues[2], formValues[3], formValues[4], this.userId).subscribe((res: any) => {
        
      if(res.http == 200) {
        this._router.navigateByUrl('/dash/ambiental/dispositivos')
        this._popupMessageService.sendMessage(["¡Bien!", "El dispositivo ha sido creado correctamente"])
      } else {
        this._popupMessageService.sendMessage(["Error", "Ha ocurrido algún error al crear el dispositivo"]);
      }
    }) */
  }

  cancel() {
    this._router.navigate(['/dash/gestion/gateways'])
    this._cdr.detectChanges()
  }
}