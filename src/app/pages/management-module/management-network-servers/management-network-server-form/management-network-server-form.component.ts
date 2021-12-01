import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import FormElement from 'src/app/shared/models/FormElement';
import FormField from 'src/app/shared/models/FormField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { Router } from '@angular/router';
import { ManagementNetworkServerService } from '../management-network-servers.service';

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
export class ManagementNetworkServerFormComponent implements OnInit, OnChanges {
  
  formElement: FormElement
  formRecolector: Array<string> = new Array<string>();

  constructor(
    private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef,
    private _service: ManagementNetworkServerService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._titleUpdaterService.changeTitle("Crear network server");
    this.generateFormElements();
  }

  ngOnChanges() {
    this.generateFormElements();
  }

  generateFormElements() {
    let ff1 = new FormField("Nombre del network server", "Escribe un nombre", InputType.Text, "name");
    let ff2 = new FormField("Mac del gateway", "Escribe una dirección MAC", InputType.Text, "identifier");
    let ff3 = new FormField("Centralizado", "Si/No", InputType.Text, "centralized");
    let ff4 = new FormField("URL", "Escribe una URL", InputType.Text, "url");
    let ff5 = new FormField("Tipo", "Escribe un tipo", InputType.Text, "type");
    let ff6 = new FormField("Proveedor", "Escribe un proveedor", InputType.Text, "provider");
    let ff7 = new FormField("Token", "Define el token", InputType.Text, "token");

    this.formElement = new FormElement([ff1, ff2, ff3, ff4, ff5, ff7, ff6])

    this._cdr.detectChanges()
  }

  submit() {    
    this._service.storeNetorkServer(this.formRecolector[0], this.formRecolector[1], this.formRecolector[2], this.formRecolector[3], this.formRecolector[4], this.formRecolector[5], this.formRecolector[6]).subscribe((res: any) => {
      if(res.http == 200) {
        alert("Network server creado")
        this._router.navigateByUrl('/dash/gestion/network_servers')
      } else {
        alert("Hay algun error")
      }
    })
  }
}
