import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import FormElement from 'src/app/shared/models/FormElement';
import FormField from 'src/app/shared/models/FormField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { EnviromentalDevicesService } from '../enviromental-devices.service';
import { Router } from '@angular/router';
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
  selector: 'app-enviromental-device-form',
  templateUrl: './enviromental-device-form.component.html',
  styleUrls: ['./enviromental-device-form.component.scss'],
})
export class EnviromentalDeviceFormComponent implements OnInit, OnChanges {
  
  // Atributes
  formElement: FormElement
  userId:any;
  role:any;

  // Constructor
  constructor(
    private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef,
    private _service: EnviromentalDevicesService,
    private _popupMessageService: PopupMessageService,
    private _router: Router
  ) { }

  // Method
  ngOnInit(): void {
    // Title management
    this._titleUpdaterService.changeTitle("Crear dispositivo");
    // Generating the DOM elements
    this.generateFormElements();
  }

  ngOnChanges() {
    this.generateFormElements();
  }

  generateFormElements() {
    let ff1 = new FormField("Nombre del dipositivo", "Escribe un nombre", InputType.Text, "name");
    let ff2 = new FormField("DeviceEUI", "Escribe un deviceEUI", InputType.Text, "deviceEUI");
    let ff3 = new FormField("Gateway", "Elige un gateway", InputType.Select, "gateway", true, [[5, "alcoy_gateway_1"],[6, "alcoy_gateway_2"]]);
    let ff4 = new FormField("Latitud", "Escribe una latitud", InputType.Text, "latitude");
    let ff5 = new FormField("Longitud", "Escribe una longitud", InputType.Text, "longitude");

    this.formElement = new FormElement([ff1, ff2, ff3, ff4, ff5])
    this._cdr.detectChanges()
  }

  submit(formValues: Array<string>) {
    this._router.navigateByUrl('/dash/ambiental/dispositivos')
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
    this._router.navigateByUrl('/dash/ambiental/dispositivos')
    this._cdr.detectChanges()
  }
}
