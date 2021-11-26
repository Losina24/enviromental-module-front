import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import FormElement from 'src/app/shared/models/FormElement';
import FormField from 'src/app/shared/models/FormField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { Router } from '@angular/router';
import { ManagementCouncilsService } from '../management-councils.service';

enum InputType {
  Text = "text",
  Email = "email",
  Number = "number",
  Date = "date",
  Pass = "password",
  Select = "select"
}

@Component({
  selector: 'app-management-council-form',
  templateUrl: './management-council-form.component.html',
  styleUrls: ['./management-council-form.component.scss']
})
export class ManagementCouncilFormComponent implements OnInit, OnChanges {

  formElement: FormElement
  formRecolector: Array<string> = new Array<string>();

  constructor(
    private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef,
    private _router: Router,
    private _service: ManagementCouncilsService
  ) { }

  ngOnInit(): void {
    this._titleUpdaterService.changeTitle("Crear ayuntamiento");
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
    let ff1 = new FormField("Nombre del ayuntamiento", "Escribe un nombre", InputType.Text, "name");
    let ff2 = new FormField("Dirección", "Escribe una dirección", InputType.Text, "address");
    let ff3 = new FormField("Número de teléfono", "Escribe un número de teléfono", InputType.Text, "phoneNumber");
    let ff4 = new FormField("Correo electrónico", "Escribe un correo electrónico", InputType.Text, "email");
    let ff5 = new FormField("Sitio web", "Escribe una URL", InputType.Text, "web");
    let ff6 = new FormField("Código postal", "Escribe un código postal", InputType.Text, "postalCode");
    let ff7 = new FormField("IBAN", "Escribe el IBAN", InputType.Text, "iban");

    this.formElement = new FormElement([ff1, ff2, ff3, ff4, ff5, ff6, ff7])

    this._cdr.detectChanges()
  }

  submit() {
    this._service.storeCouncil(this.formRecolector[0], this.formRecolector[1], this.formRecolector[2], this.formRecolector[3], this.formRecolector[4], this.formRecolector[5], this.formRecolector[6]).subscribe((res: any) => {
      if(res.http == 200) {
        alert("Ayuntamiento creado")
        this._router.navigateByUrl('/dash/gestion/ayuntamientos')
      } else {
        alert("Hay algun error")
      }
    })
  }
}
