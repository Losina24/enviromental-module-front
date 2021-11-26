import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import FormElement from 'src/app/shared/models/FormElement';
import FormField from 'src/app/shared/models/FormField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { Router } from '@angular/router';
import { ManagementUsersService } from '../management-users.service';

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
    private _service: ManagementUsersService
  ) { }

  ngOnInit(): void {
    this._titleUpdaterService.changeTitle("Crear usuario");
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

  submit() {
    this._service.storeUser(this.formRecolector[0], this.formRecolector[1], this.formRecolector[2], this.formRecolector[3], this.formRecolector[4], this.formRecolector[5], this.formRecolector[6], this.formRecolector[7], this.formRecolector[8]).subscribe((res: any) => {
      if(res.http == 200) {
        alert("Usuario creado")
        this._router.navigateByUrl('/dash/gestion/usuarios')
      } else {
        alert("Hay algun error")
      }
    })
  }
}
