import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import FormElement from 'src/app/shared/models/FormElement';
import FormField from 'src/app/shared/models/FormField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { EnviromentalSensorsService } from '../enviromental-sensors.service';
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
  selector: 'app-enviromental-sensor-form',
  templateUrl: './enviromental-sensor-form.component.html',
  styleUrls: ['./enviromental-sensor-form.component.scss']
})

export class EnviromentalSensorFormComponent implements OnInit {

  formElement: FormElement
  formRecolector: Array<string> = new Array<string>();

  constructor(
    private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef,
    private _service: EnviromentalSensorsService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._titleUpdaterService.changeTitle("Crear sensor");
    this.generateFormElements()
  }

  generateFormElements() {
    let ff1 = new FormField("Nombre del sensor", "Escribe un nombre", InputType.Text, "name");
    let ff2 = new FormField("Tipo de sensor", "Selecciona un tipo de sensor", InputType.Select, "type", true, [[1, "ambiental_type"]]);
    let ff3 = new FormField("Dispositivo", "Elige un dispositivo", InputType.Select, "deviceId", true, [[1, "amb_dev_1"], [2, "amb_dev_2"], [10, "Device123_123"]]);
    let ff4 = new FormField("DeviceEUI", "DeviceEUI", InputType.Text, "deviceEUI");

    this.formElement = new FormElement([ff1, ff4, ff3, ff2])

    this._cdr.detectChanges()
  }

  submit() {
    this._service.storeEnviromentalSensor(this.formRecolector[0], this.formRecolector[1], this.formRecolector[2], this.formRecolector[3]).subscribe((res: any) => {
      if(res.http == 200) {
        alert("Sensor creado")
        this._router.navigateByUrl('/dash/ambiental/sensores')
      } else {
        alert("Hay algun error")
      }
    })
  }
}
