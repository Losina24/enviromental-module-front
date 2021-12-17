import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import FormElement from 'src/app/shared/models/FormElement';
import FormField from 'src/app/shared/models/FormField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { EnviromentalSensorsService } from '../enviromental-sensors.service';
import { Router } from '@angular/router';
import { PopupMessageService } from 'src/app/shared/components/popup-message/popup-message.service';
import Sensor from 'src/app/shared/models/Sensor';
import { EnviromentalDevicesService } from '../../enviromental-devices/enviromental-devices.service';
import EnviromentalDevice from 'src/app/shared/models/EnviromentalDevice';
import UserSession from 'src/app/shared/models/UserSession';

enum InputType {
  Text = "text",
  Email = "email",
  Number = "number",
  Date = "date",
  Pass = "password",
  Select = "select"
}

@Component({
  selector: 'app-enviromental-sensor-form',
  templateUrl: './enviromental-sensor-form.component.html',
  styleUrls: ['./enviromental-sensor-form.component.scss']
})

export class EnviromentalSensorFormComponent implements OnInit {

  formElement: FormElement
  formRecolector: Array<string> = new Array<string>();

  userId: number;
  role: string = "";
  councilId: number;

  constructor(
    private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef,
    private _service: EnviromentalSensorsService,
    private _popupMessageService: PopupMessageService,
    private _deviceService: EnviromentalDevicesService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    // Setting the user's role
    let session = new UserSession();
    this.userId = session.getUserId();
    this.role = session.getRole();
    this.councilId = session.getCouncilId();

    if(this.isUpdate() > 0) {
      this._titleUpdaterService.changeTitle("Editar sensor");

      this.getSensorInformation().then((sensor: Sensor) => {
        this.generateFormElements(sensor);
        this._cdr.detectChanges();
      })

    } else {
      this._titleUpdaterService.changeTitle("Crear sensor");
      this.generateFormElements();
    }
    
  }

  ngOnChanges() {
    if(this.isUpdate() > 0) {
      this._titleUpdaterService.changeTitle("Editar sensor");
      this.generateFormElements();
    } else {
      this._titleUpdaterService.changeTitle("Crear sensor");
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

  async getSensorInformation(): Promise<Sensor> {
    return new Promise<Sensor>((resolve, reject) => {
      this._service.getSensorInformation(this.isUpdate()).subscribe( (res: any) => {

        const id = res.result._id;
        const name = res.result._name;
        const deviceId = res.result._deviceId;
        const deviceName = res.result._deviceName;
        const deviceEUI = res.result._deviceEUI;
        const type = res.result._type;
        const status = res.result._status;
        
        let device = new EnviromentalDevice();
        device.setId(deviceId)
        device.setName(deviceName);
        device.setDeviceEUI(deviceEUI)

        resolve(new Sensor({id, name, device, type, status}));
      })
    })
  }

  async getDevices(): Promise<any[]> { // Deberia devolver Promise<Council[]>
    return new Promise<any>((resolve, reject) => {
      let id;
      if(this.role == "root") {
        id = this.userId;
      } else {
        id = this.councilId;
      }
      this._deviceService.getEnviromentalDevicePagination(id, 10000, 1, this.role).subscribe( (res: any) => {
        
        /* const id = res.result.id;
        const name = res.result.name;
        const gateway = res.result.gatewayId;
        const deviceEUI = res.result.deviceEUI;
        const latitude = parseFloat(res.result.coords[0]);
        const longitude = parseFloat(res.result.coords[1]);
        const coords: [number, number] = [latitude, longitude];
        const status = res.result.status;

        this.device = new EnviromentalDevice({id, name, gateway, deviceEUI, coords, status}) */
        let result: [number, string][] = [];
        console.log(res.result);
        
        res.result.forEach((element: any) => {
          result.push([element.id, element.name])
        });
        resolve(result);
      })
    })
  }

  generateFormElements(sensor?: Sensor) {
    this.getDevices().then(res => {
      let formFieldName = new FormField("Nombre del sensor", "Escribe un nombre", InputType.Text, "name");
      let formFieldType = new FormField("Tipo de sensor", "Selecciona un tipo de sensor", InputType.Select, "type", true, [[1, "Enviromental"]]);
      let formFieldDevice = new FormField("Dispositivo", "Elige un dispositivo", InputType.Select, "deviceId", true, res);
      let formFieldDeviceEUI = new FormField("DeviceEUI", "DeviceEUI", InputType.Text, "deviceEUI");

      if(sensor) {
        formFieldName.setValue(sensor.getName());
        formFieldDeviceEUI.setValue(sensor.getDevice().getDeviceEUI());
        formFieldDevice.setValue(sensor.getDevice().getId().toString());
        formFieldType.setValue(sensor.getType())
      }

      this.formElement = new FormElement([formFieldName, formFieldDeviceEUI, formFieldDevice, formFieldType])
      this._cdr.detectChanges()
    })
  }

  submit(formValues: Array<string>) {
    //this._router.navigateByUrl('/dash/ambiental/sensores')
    

    if(this.isUpdate() > 0)  {
      this._service.editSensor(this.isUpdate(), formValues[0], formValues[1], formValues[2], formValues[3]).subscribe((res: any) => {
        if(res.http == 200) {
          this._router.navigateByUrl('/dash/ambiental/sensores')
          this._popupMessageService.sendMessage(["¡Bien!", "El sensor ha sido creado correctamente", true])
        } else {
          this._popupMessageService.sendMessage(["¡Vaya!", "Hubo un error al crear el sensor", false])
        }
      }, err => {
        this._popupMessageService.sendMessage(["Error", "Ha ocurrido algún error al crear el sensor", false]);
      })
    } else {
      this._service.storeEnviromentalSensor(formValues[0], formValues[1], formValues[2], formValues[3]).subscribe((res: any) => {
        if(res.http == 200) {
          this._router.navigateByUrl('/dash/ambiental/sensores')
          this._popupMessageService.sendMessage(["¡Bien!", "El sensor ha sido creado correctamente", true])
        } else {
          this._popupMessageService.sendMessage(["¡Vaya!", "Hubo un error al crear el sensor", false])
        }
      }, err => {
        this._popupMessageService.sendMessage(["Error", "Ha ocurrido algún error al crear el sensor", false]);
      })
    }
  }

  cancel() {
    this._router.navigateByUrl('/dash/ambiental/sensores')
    this._cdr.detectChanges()
  }
}
