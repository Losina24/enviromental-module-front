import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import FormElement from 'src/app/shared/models/FormElement';
import FormField from 'src/app/shared/models/FormField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';

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
  formRecolector: Array<string | number | boolean> = new Array<string | number | boolean>();

  constructor(
    private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this._titleUpdaterService.changeTitle("Crear dispositivo");
    this.generateListElements();
  }

  ngOnChanges() {
    this.generateListElements();
  }

  generateListElements() {
    let ff1 = new FormField("Nombre del dipositivo", "Escribe un nombre", InputType.Text, "name");

    let ff2 = new FormField("Dispositivo", "Elige un dispositivo", InputType.Select, "device", true, [[1, "DispositivoA1S32"], [2, "DispositivoA1S33"], [3, "DispositivoA1S34"]]);

    let ff3 = new FormField("Gateway", "Elige un gateway", InputType.Select, "gateway", true, [[1, "Gateway de Gandia"], [2, "Gateway de Valencia"], [3, "Gateway de Madrid"]]);

    this.formElement = new FormElement([ff1, ff2, ff3])

    this._cdr.detectChanges()
  }

  submit() {
    
  }
}
