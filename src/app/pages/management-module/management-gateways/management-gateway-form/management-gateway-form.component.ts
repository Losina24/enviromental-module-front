import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import FormElement from 'src/app/shared/models/FormElement';
import FormField from 'src/app/shared/models/FormField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { Router } from '@angular/router';
import { ManagementGatewaysService } from '../management-gateways.service';
import { PopupMessageService } from 'src/app/shared/components/popup-message/popup-message.service';
import { ManagementCouncilsService } from '../../management-councils/management-councils.service';
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
  selector: 'app-management-gateway-form',
  templateUrl: './management-gateway-form.component.html',
  styleUrls: ['./management-gateway-form.component.scss']
})
export class ManagementGatewayFormComponent implements OnInit, OnChanges {
  
  formElement: FormElement
  formRecolector: Array<string> = new Array<string>();
  
  userId: number;
  role: string;
  councilId: number;

  constructor(
    private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef,
    private _service: ManagementGatewaysService,
    private _councilService: ManagementCouncilsService,
    private _router: Router,
    private _popupMessageService: PopupMessageService
  ) { }

  ngOnInit(): void {
    // Setting the user's role
    let session = new UserSession();
    this.userId = session.getUserId();
    this.role = session.getRole();
    this.councilId = session.getCouncilId();

    if(this.isUpdate() > 0) {
      this._titleUpdaterService.changeTitle("Editar gateway");
      this.getGateway().then( gateway => {
        this.generateFormElements(gateway);
      })
    } else {
      this._titleUpdaterService.changeTitle("Crear gateway");
      this.generateFormElements();
    }
  }

  ngOnChanges() {
    if(this.isUpdate() > 0) {
      this._titleUpdaterService.changeTitle("Editar gateway");
      this.generateFormElements();
    } else {
      this._titleUpdaterService.changeTitle("Crear gateway");
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

  generateFormElements(gateway?: any) {
    this.getCouncils().then(res => {

      let ff1 = new FormField("Nombre del gateway", "Escribe un nombre", InputType.Text, "name");
      let ff2 = new FormField("Mac del gateway", "Escribe una dirección MAC", InputType.Text, "mac");
      let ff3 = new FormField("Ayuntamiento", "Elige un ayuntamiento", InputType.Select, "councilId", true, res);
      let ff4 = new FormField("Latitud", "Escribe una latitud", InputType.Text, "latitude");
      let ff5 = new FormField("Longitud", "Escribe una longitud", InputType.Text, "longitude");

      if (gateway) {
        ff1.setValue(gateway.name + "")
        ff2.setValue(gateway.mac + "")
        ff3.setValue(gateway.councilId + "")
        ff4.setValue(gateway.coords[0] + "")
        ff5.setValue(gateway.coords[1] + "")
      }

      this.formElement = new FormElement([ff1, ff2, ff3, ff4, ff5])
      this._cdr.detectChanges()
    }).catch(err => {

    })

  }

  async getGateway(): Promise<any> { // Deberia devolver Promise<Gateway>
    return new Promise<any>((resolve, reject) => {
      this._service.getGatewayInformation(this.isUpdate()).subscribe( (res: any) => {
        /* const id = res.result.id;
        const name = res.result.name;
        const gateway = res.result.gatewayId;
        const deviceEUI = res.result.deviceEUI;
        const latitude = parseFloat(res.result.coords[0]);
        const longitude = parseFloat(res.result.coords[1]);
        const coords: [number, number] = [latitude, longitude];
        const status = res.result.status;

        this.device = new EnviromentalDevice({id, name, gateway, deviceEUI, coords, status}) */
        resolve(res.response);
      })
    })
  }

  async getCouncils(): Promise<any[]> { // Deberia devolver Promise<Council[]>
    return new Promise<any>((resolve, reject) => {

      if(this.councilId <= 1) {
        this._councilService.getCouncilPagination(this.councilId, 10000, 1, "root").subscribe( (res: any) => {
          console.log('ayuntamientos', res);
          
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
          res.result.forEach((element: any) => {
            if (element.name != "root_council") result.push([element.id, element.name])
          });
          resolve(result);
        })
      } else {
        this._councilService.getCouncilPagination(this.councilId, 10000, 1, "council").subscribe( (res: any) => {
          /* const id = res.result.id;
          const name = res.result.name;
          const gateway = res.result.gatewayId;
          const deviceEUI = res.result.deviceEUI;
          const latitude = parseFloat(res.result.coords[0]);
          const longitude = parseFloat(res.result.coords[1]);
          const coords: [number, number] = [latitude, longitude];
          const status = res.result.status;
  
          this.device = new EnviromentalDevice({id, name, gateway, deviceEUI, coords, status}) */
          resolve(res.result);
        })
      }
    })
  }

  submit(formValues: Array<string>) {
    if(this.isUpdate() > 0)  {
      this._service.editGateway(this.isUpdate(), formValues[0], formValues[1], formValues[2], formValues[3], formValues[4]).subscribe((res: any) => {
        
        if(res.http == 200) {
          this._router.navigateByUrl('/dash/gestion/gateways')
          this._popupMessageService.sendMessage(["¡Bien!", "El gateway ha sido creado correctamente", true])
        } else {
          this._popupMessageService.sendMessage(["Error", "Ha ocurrido algún error al crear el gateway", false]);
        }
      }, err => {
        this._popupMessageService.sendMessage(["Error", "Ha ocurrido algún error al crear el gateway", false]);
      })
    } else {
      this._service.storeGateway(formValues[0], formValues[1], formValues[2], formValues[3], formValues[4]).subscribe((res: any) => {
        
        if(res.http == 200) {
          this._router.navigateByUrl('/dash/gestion/gateways')
          this._popupMessageService.sendMessage(["¡Bien!", "El gateway ha sido creado correctamente", true])
        } else {
          this._popupMessageService.sendMessage(["Error", "Ha ocurrido algún error al crear el gateway", false]);
        }
      }, err => {
        this._popupMessageService.sendMessage(["Error", "Ha ocurrido algún error al crear el gateway", false]);
      })
    }
  }

  cancel() {
    this._router.navigate(['/dash/gestion/gateways'])
    this._cdr.detectChanges()
  }
}