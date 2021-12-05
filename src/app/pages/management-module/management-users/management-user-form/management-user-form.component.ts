import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import FormElement from 'src/app/shared/models/FormElement';
import FormField from 'src/app/shared/models/FormField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { Router } from '@angular/router';
import { ManagementUsersService } from '../management-users.service';
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
  selector: 'app-management-user-form',
  templateUrl: './management-user-form.component.html',
  styleUrls: ['./management-user-form.component.scss']
})
export class ManagementUserFormComponent implements OnInit, OnChanges {
  
  formElement: FormElement
  formRecolector: Array<string> = new Array<string>();

  constructor(
    private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef,
    private _router: Router,
    private _service: ManagementUsersService,
    private _popupMessageService: PopupMessageService
  ) { }

  ngOnInit(): void {
    this._titleUpdaterService.changeTitle("Crear usuario");
    this.generateFormElements();
  }

  ngOnChanges() {
    this.generateFormElements();
  }

  generateFormElements() {
    let ff0 = new FormField("Rol", "Elige un rol", InputType.Select, "roleId", true, [[1, "root"],[2, "admin"], [3, "usuario"]]);
    let ff1 = new FormField("Ayuntamiento", "Elige un ayuntamiento", InputType.Select, "councilId", true, [[1, "nameXPUT"],[2, "ayuntamiento gandia"], [3, "ayuntamiento alcoy"], [7, "Ayuntamiento de prueba"]]);
    let ff2 = new FormField("Dirección", "Escribe una dirección", InputType.Text, "address");
    let ff3 = new FormField("Número de teléfono", "Escribe un número de teléfono", InputType.Text, "phoneNumber");
    let ff4 = new FormField("Correo electrónico", "Escribe un correo electrónico", InputType.Text, "email");
    let ff7 = new FormField("Nombre del usuario", "Escribe un nombre", InputType.Text, "name");
    let ff8 = new FormField("Apellidos del usuario", "Escribe los apellidos", InputType.Text, "surnames");
    let ff9 = new FormField("Contraseña", "Escribe la contraseña", InputType.Pass, "password");
    let ff10 = new FormField("Código postal", "Escribe un código postal", InputType.Text, "postalCode");

    this.formElement = new FormElement([ff0, ff1, ff7, ff8, ff9, ff2, ff3, ff4, ff10])

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
    this._router.navigate(['/dash/gestion/usuarios'])
    this._cdr.detectChanges()
  }
}
