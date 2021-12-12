import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import FormElement from 'src/app/shared/models/FormElement';
import FormField from 'src/app/shared/models/FormField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { EnviromentalDevicesService } from '../enviromental-devices.service';
import { Router } from '@angular/router';
import { PopupMessageService } from 'src/app/shared/components/popup-message/popup-message.service';
import EnviromentalDevice from 'src/app/shared/models/EnviromentalDevice';

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
export class EnviromentalDeviceFormComponent implements OnInit {
  
  // Atributes
  formElement: FormElement;
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
    if(this.isUpdate() > 0) {
      this._titleUpdaterService.changeTitle("Editar dispositivo");
      this.getEnviromentalDeviceInformation()
      .then((device: EnviromentalDevice) => {
        this.generateFormElements(device);
        this._cdr.detectChanges();
      })
      .catch(() => {
        this._popupMessageService.sendMessage(["Error", "Ha ocurrido algún error al crear el dispositivo", true])
      })
    } else {
      this._titleUpdaterService.changeTitle("Crear dispositivo");
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

  async getEnviromentalDeviceInformation(): Promise<EnviromentalDevice> {
    return new Promise<EnviromentalDevice>((resolve, reject) => {
      this._service.getEnviromentalDeviceInformation(this.isUpdate()).subscribe( (res: any) => {
        const id = res.result.id;
        const name = res.result.name;
        const gateway = res.result.gatewayId;
        const deviceEUI = res.result.deviceEUI;
        const latitude = parseFloat(res.result.coords[0]);
        const longitude = parseFloat(res.result.coords[1]);
        const coords: [number, number] = [latitude, longitude];
        const status = res.result.status;
  
        resolve(new EnviromentalDevice({id, name, gateway, deviceEUI, coords, status}));
      })
    })
  }

  generateFormElements(device?: EnviromentalDevice) {
    let formFieldName = new FormField("Nombre del dipositivo", "Escribe un nombre", InputType.Text, "name");
    let formFieldDeviceEUI = new FormField("DeviceEUI", "Escribe un deviceEUI", InputType.Text, "deviceEUI");
    let formFieldGateway = new FormField("Gateway", "Elige un gateway", InputType.Select, "gateway", true, [[5, "alcoy_gateway_1"],[6, "alcoy_gateway_2"]]);
    let formFieldLatitude = new FormField("Latitud", "Escribe una latitud", InputType.Text, "latitude");
    let formFieldLongitude = new FormField("Longitud", "Escribe una longitud", InputType.Text, "longitude");

    if(device) {
      formFieldName.setValue(device.getName());
      formFieldDeviceEUI.setValue(device.getDeviceEUI());
      formFieldGateway.setValue(device.getGateway().toString());
      formFieldLatitude.setValue(device.getLatitude().toString())
      formFieldLongitude.setValue(device.getLongitude().toString())
    }
  
    this.formElement = new FormElement([formFieldName, formFieldDeviceEUI, formFieldGateway, formFieldLatitude, formFieldLongitude])
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
