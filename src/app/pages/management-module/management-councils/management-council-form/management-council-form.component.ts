import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import FormElement from 'src/app/shared/models/FormElement';
import FormField from 'src/app/shared/models/FormField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { Router } from '@angular/router';
import { ManagementCouncilsService } from '../management-councils.service';
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
  selector: 'app-management-council-form',
  templateUrl: './management-council-form.component.html',
  styleUrls: ['./management-council-form.component.scss']
})
export class ManagementCouncilFormComponent implements OnInit {

  formElement: FormElement
  formRecolector: Array<string> = new Array<string>();

  constructor(
    private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef,
    private _router: Router,
    private _service: ManagementCouncilsService,
    private _popupMessageService: PopupMessageService
  ) { }

  ngOnInit(): void {
    if(this.isUpdate() > 0) {
      this._titleUpdaterService.changeTitle("Editar ayuntamiento");

      this.getCouncil().then( res => {
        this.generateFormElements(res);
      })
    } else {
      this._titleUpdaterService.changeTitle("Crear ayuntamiento");
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

  async getCouncil(): Promise<any> { // Deberia devolver Promise<Council>
    return new Promise<any>((resolve, reject) => {
      this._service.getCouncilInformation(this.isUpdate()).subscribe( (res: any) => {
        /* const id = res.result.id;
        const name = res.result.name;
        const gateway = res.result.gatewayId;
        const deviceEUI = res.result.deviceEUI;
        const latitude = parseFloat(res.result.coords[0]);
        const longitude = parseFloat(res.result.coords[1]);
        const coords: [number, number] = [latitude, longitude];
        const status = res.result.status;

        this.device = new EnviromentalDevice({id, name, gateway, deviceEUI, coords, status}) */
        console.log('probando', res.result);
        
        resolve(res.result);
      })
    })
  }

  generateFormElements(council?: any) { // Deberia ser council?: Council
    let ff1 = new FormField("Nombre del ayuntamiento", "Escribe un nombre", InputType.Text, "name");
    let ff2 = new FormField("Dirección", "Escribe una dirección", InputType.Text, "address");
    let ff3 = new FormField("Número de teléfono", "Escribe un número de teléfono", InputType.Text, "phoneNumber");
    let ff4 = new FormField("Correo electrónico", "Escribe un correo electrónico", InputType.Text, "email");
    let ff5 = new FormField("Sitio web", "Escribe una URL", InputType.Text, "web");
    let ff6 = new FormField("Código postal", "Escribe un código postal", InputType.Text, "postalCode");
    let ff7 = new FormField("IBAN", "Escribe el IBAN", InputType.Text, "iban");

    if (council) {
      ff1.setValue(council.name)
      ff2.setValue(council.address)
      ff3.setValue(council.phone)
      ff4.setValue(council.email)
      ff5.setValue(council.web)
      ff6.setValue(council.postalCode)
      ff7.setValue(council.iban)
    }

    this.formElement = new FormElement([ff1, ff2, ff3, ff4, ff5, ff6, ff7]);
    this._cdr.detectChanges()
  }

  submit(formValues: Array<string>) {

    if(this.isUpdate() > 0) {
      this._service.editCouncil(this.isUpdate(), formValues[0], formValues[1], formValues[2], formValues[3], formValues[4], formValues[5], formValues[6]).subscribe((res: any) => {
        
        if(res.http == 200) {
          this._router.navigateByUrl('/dash/gestion/ayuntamientos')
          this._popupMessageService.sendMessage(["¡Bien!", "El ayuntamiento ha sido editado correctamente", true])
        } else {
          this._popupMessageService.sendMessage(["Error", "Ha ocurrido algún error al editar el ayuntamiento", false]);
        }
      })
    } else {
      this._service.storeCouncil(formValues[0], formValues[1], formValues[2], formValues[3], formValues[4], formValues[5], formValues[6]).subscribe((res: any) => {
        
        if(res.http == 200) {
          this._router.navigateByUrl('/dash/gestion/ayuntamientos')
          this._popupMessageService.sendMessage(["¡Bien!", "El ayuntamiento ha sido creado correctamente", true])
        } else {
          this._popupMessageService.sendMessage(["Error", "Ha ocurrido algún error al crear el ayuntamiento", false]);
        }
      })
    }
  }

  cancel() {
    this._router.navigate(['/dash/gestion/ayuntamientos'])
    this._cdr.detectChanges()
  }
}
