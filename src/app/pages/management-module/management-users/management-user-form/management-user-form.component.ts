import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import FormElement from 'src/app/shared/models/FormElement';
import FormField from 'src/app/shared/models/FormField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { Router } from '@angular/router';
import { ManagementUsersService } from '../management-users.service';
import { ManagementCouncilsService } from '../../management-councils/management-councils.service';
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
  selector: 'app-management-user-form',
  templateUrl: './management-user-form.component.html',
  styleUrls: ['./management-user-form.component.scss']
})
export class ManagementUserFormComponent implements OnInit {
  
  formElement: FormElement
  formRecolector: Array<string> = new Array<string>();
  
  userId:any;
  role:any;
  councilId: number;
  loaded = false;

  constructor(
    private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef,
    private _router: Router,
    private _service: ManagementUsersService,
    private _popupMessageService: PopupMessageService,
    private _councilService: ManagementCouncilsService
  ) { }

  ngOnInit(): void {
    // Setting the user's role
    let session = new UserSession();
    this.userId = session.getUserId();
    this.role = session.getRole();
    this.councilId = session.getCouncilId();

    if(this.isUpdate() > 0) {
      // Changing the title
      this._titleUpdaterService.changeTitle("Editar usuario");

      // Generating the inputs
      this.getUser().then((user: any) => {
        this.generateFormElements(user);
      })

    } else {
      // Changing the title
      this._titleUpdaterService.changeTitle("Crear usuario");

      // Generating the inputs
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

  generateFormElements(user?: any) { // Deberia ser: user?: User
    // Getting the councils
    this.getCouncils().then( councils => {
      
      // Generating the DOM
      let formFieldRole = new FormField("Rol", "Elige un rol", InputType.Select, "roleId", true, [[1, "root"],[2, "admin"], [3, "usuario"]]);
      let formFieldCouncil = new FormField("Ayuntamiento", "Elige un ayuntamiento", InputType.Select, "councilId", true, councils);
      let formFieldDirection = new FormField("Dirección", "Escribe una dirección", InputType.Text, "address");
      let formFieldPhone = new FormField("Número de teléfono", "Escribe un número de teléfono", InputType.Text, "phoneNumber");
      let formFieldMail = new FormField("Correo electrónico", "Escribe un correo electrónico", InputType.Text, "email");
      let formFieldUsername = new FormField("Nombre del usuario", "Escribe un nombre", InputType.Text, "name");
      let formFieldSurname = new FormField("Apellidos del usuario", "Escribe los apellidos", InputType.Text, "surnames");
      let formFieldPassword = new FormField("Contraseña", "Escribe la contraseña", InputType.Pass, "password");
      let formFieldPostal = new FormField("Código postal", "Escribe un código postal", InputType.Text, "postalCode");

      // If is an `edit user` page
      if(user) {
        formFieldRole.setValue(user.roleId.toString());
        formFieldCouncil.setValue(user.councilId.toString());
        formFieldUsername.setValue(user.name);
        formFieldSurname.setValue(user.surname);
        formFieldPostal.setValue(user.postalCode);
        formFieldDirection.setValue(user.direction);
        formFieldPhone.setValue(user.phone);
        formFieldMail.setValue(user.email);
      }

      this.formElement = new FormElement([formFieldRole, formFieldCouncil, formFieldUsername, formFieldSurname, formFieldPassword, formFieldDirection, formFieldPhone, formFieldMail, formFieldPostal])

      this._cdr.detectChanges()

    }).catch( err => {
      this._popupMessageService.sendMessage(["Error", "Ha ocurrido algún error al crear el dispositivo", false]);
    })
  }

  async getCouncils(): Promise<[number, string][]> { // Deberia ser Promise<Council[]>
    return new Promise((resolve, reject) => {
      
      this._councilService.getCouncilPagination(this.userId, 10000, 1, 'root').subscribe(res => {  
        let councils: [number, string][] = [];

        res.result.forEach((council:any) => {
          if(council.name != "root_council") {
            councils.push([council.id, council.name])
          }
        });

        resolve(councils)
      })
    })
  }

  async getUser(): Promise<any> { // Deberia devolver Promise<User>
    return new Promise<any>((resolve, reject) => {
      this._service.getUserInformation(this.isUpdate()).subscribe( (res: any) => {
        /* const id = res.result.id;
        const name = res.result.name;
        const gateway = res.result.gatewayId;
        const deviceEUI = res.result.deviceEUI;
        const latitude = parseFloat(res.result.coords[0]);
        const longitude = parseFloat(res.result.coords[1]);
        const coords: [number, number] = [latitude, longitude];
        const status = res.result.status;

        this.device = new EnviromentalDevice({id, name, gateway, deviceEUI, coords, status}) */
        resolve(res.response.result);
      })
    })
  }

  submit(formValues: Array<string>) {
    // If the user type selected is root, then set the council to root_council
    let council  = formValues[1];
    if(formValues[0] == "root") {
      council = 1 + "";
    }
    
    if(this.isUpdate() > 0) {
      this._service.editUser( this.isUpdate(), formValues[0], council, formValues[2], formValues[3], formValues[4], formValues[5], formValues[6], formValues[7], formValues[8]).subscribe((res: any) => {
        if(res.http == 200) {
          this._router.navigateByUrl('/dash/gestion/usuarios')
          this._popupMessageService.sendMessage(["¡Bien!", "El usuario ha sido editado correctamente", true])
        } else {
          this._popupMessageService.sendMessage(["Error", "Ha ocurrido algún error al editar el usuario", false]);
        }
      })

    } else {
      this._service.storeUser(formValues[0], council, formValues[2], formValues[3], formValues[4], formValues[5], formValues[6], formValues[7], formValues[8]).subscribe((res: any) => {
      
        // Sending notification messages
        if(res.http == 200) {
          this._popupMessageService.sendMessage(["¡Bien!", "El usuario ha sido creado correctamente", true] )
        } else {
          this._popupMessageService.sendMessage(["Error", "Ha ocurrido algún error al crear el usuario", false]);
        }
  
        // Redirection
        this._router.navigateByUrl('/dash/gestion/usuarios')
      })
    }
  }

  cancel() {
    this._router.navigate(['/dash/gestion/usuarios'])
    this._cdr.detectChanges()
  }
}
