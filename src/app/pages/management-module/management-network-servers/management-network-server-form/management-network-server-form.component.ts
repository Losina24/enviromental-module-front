import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import FormElement from 'src/app/shared/models/FormElement';
import FormField from 'src/app/shared/models/FormField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { Router } from '@angular/router';
import { ManagementNetworkServerService } from '../management-network-servers.service';
import { PopupMessageService } from 'src/app/shared/components/popup-message/popup-message.service';
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
  selector: 'app-management-network-server-form',
  templateUrl: './management-network-server-form.component.html',
  styleUrls: ['./management-network-server-form.component.scss']
})
export class ManagementNetworkServerFormComponent implements OnInit {
  
  formElement: FormElement
  formRecolector: Array<string> = new Array<string>();

  userId: number;
  role: string = "";
  councilId: number;

  constructor(
    private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef,
    private _service: ManagementNetworkServerService,
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
      this._titleUpdaterService.changeTitle("Editar network server");
      this.getNetworkServer().then(networkServer => {
        this.generateFormElements(networkServer);
      })
    } else {
      this._titleUpdaterService.changeTitle("Crear network server");
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

  generateFormElements(networkServer?: any) { // Deberia ser networkServer?: NetworkServer

    // Generating the DOM
    let formFieldName = new FormField("Nombre del network server", "Escribe un nombre", InputType.Text, "name");
    let formFieldMac = new FormField("Mac del gateway", "Escribe una dirección MAC", InputType.Text, "identifier");
    let formFieldCentralized = new FormField("Centralizado", "Si/No", InputType.Text, "centralized");
    let formFieldURL = new FormField("URL", "Escribe una URL", InputType.Text, "url");
    let formFieldType = new FormField("Tipo", "Escribe un tipo", InputType.Text, "type");
    let formFieldProvider = new FormField("Proveedor", "Escribe un proveedor", InputType.Text, "provider");
    let formFieldToken = new FormField("Token", "Define el token", InputType.Text, "token");

    // Setting the current values if it is an edit page
    if (networkServer) {
      formFieldName.setValue(networkServer.name + "");
      formFieldMac.setValue(networkServer.mac + "");
      formFieldCentralized.setValue(networkServer.centralized + "");
      formFieldURL.setValue(networkServer.url + "");
      formFieldType.setValue(networkServer.type + "");
      formFieldProvider.setValue(networkServer.provider + "");
      formFieldToken.setValue(networkServer.token + "");
    }

    this.formElement = new FormElement([formFieldName, formFieldMac, formFieldCentralized, formFieldURL, formFieldType, formFieldToken, formFieldProvider])
    console.log(this.formElement);
    
    this._cdr.detectChanges()
  }

  async getNetworkServer(): Promise<any> { // Deberia devolver Promise<NetworkServer>
    return new Promise<any>((resolve, reject) => {
      this._service.getNetworkServerInformation(this.isUpdate()).subscribe( (res: any) => {
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

  submit(formValues: Array<string>) {
    if(this.isUpdate() > 0) {
      
      this._service.editNetorkServer(this.isUpdate(), formValues[0], formValues[1], formValues[2], formValues[3], formValues[4], formValues[5], formValues[6]).subscribe((res: any) => { // Hay que cambiar MAC del gateway por Select Gateway
        console.log(res);
        
        if(res.http == 200) {
          this._router.navigateByUrl('/dash/gestion/network_servers')
          this._popupMessageService.sendMessage(["¡Bien!", "El servidor ha sido creado correctamente", true])
        } else {
          this._popupMessageService.sendMessage(["Error", "Ha ocurrido algún error al crear el servidor", false]);
        }
      }, err => {
        this._popupMessageService.sendMessage(["Error", "Ha ocurrido algún error al crear el servidor", false]);
      })
    
    } else {
      
      this._service.storeNetorkServer(formValues[0], formValues[1], formValues[2], formValues[3], formValues[4], formValues[5], formValues[6]).subscribe((res: any) => { // Hay que cambiar MAC del gateway por Select Gateway
        
        if(res.http == 200) {
          this._router.navigateByUrl('/dash/gestion/network_servers')
          this._popupMessageService.sendMessage(["¡Bien!", "El servidor ha sido creado correctamente", true])
        } else {
          this._popupMessageService.sendMessage(["Error", "Ha ocurrido algún error al crear el servidor", false]);
        }
      }, err => {
        this._popupMessageService.sendMessage(["Error", "Ha ocurrido algún error al crear el servidor", false]);
      })
    }
  }

  cancel() {
    this._router.navigate(['/dash/gestion/network_servers'])
    this._cdr.detectChanges()
  }
}
