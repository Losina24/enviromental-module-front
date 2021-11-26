import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import FormElement from 'src/app/shared/models/FormElement';
import FormField from 'src/app/shared/models/FormField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { EnviromentalDevicesService } from '../enviromental-devices.service';
import { Router } from '@angular/router';

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
  styleUrls: ['./enviromental-device-form.component.scss']
})
export class EnviromentalDeviceFormComponent implements OnInit, OnChanges {
  
  formElement: FormElement
  formRecolector: Array<string> = new Array<string >();

  constructor(
    private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef,
    private _service: EnviromentalDevicesService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._titleUpdaterService.changeTitle("Crear dispositivo");
    this.getUserInformation()
    this.generateFormElements();
  }

  ngOnChanges() {
    this.generateFormElements();
  }

  getUserInformation() {
    if(sessionStorage.getItem("userId") != null) {
      let userId = sessionStorage.getItem("userId");
      //@ts-ignore
      this.userId = parseInt(userId)
      //@ts-ignore
      this.role = sessionStorage.getItem("role");
    } else {
      this._router.navigateByUrl("/");
    }
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

  submit() {
    this._service.storeEnviromentalDevice(this.formRecolector[0], this.formRecolector[1], this.formRecolector[2], this.formRecolector[3], this.formRecolector[4]).subscribe((res: any) => {
      if(res.http == 200) {
        alert("Dispositivo creado")
        this._router.navigateByUrl('/dash/ambiental/dispositivos/crear')
      } else {
        alert("Hay algun error")
      }
    })
  }
}