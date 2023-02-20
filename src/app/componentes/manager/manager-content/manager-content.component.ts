import { Component } from '@angular/core';
import { Manager } from 'src/app/model/manager';
import { ManagerServiceService } from 'src/app/services/manager/manager-service.service';

@Component({
  selector: 'app-manager-content',
  templateUrl: './manager-content.component.html',
  styleUrls: ['./manager-content.component.scss']
})
export class ManagerContentComponent {

  constructor(
    public mangerservice: ManagerServiceService
  ){}


  managerEditado: Manager = {
    id: -1,
    name: '',
    password: '',
    fone: '',
    foneOther: '',
    email: '',
    emailOther: '',
    inativo: false,
    admin: false
  }
  mode="list"

  alteraIdEditado(id:number){
    console.log("alteraIdEditado id="+id)
    if (id!=-1) {
      this.mangerservice.getById(id).subscribe(
        data=>this.managerEditado=data
      )
    }
    this.mode="edit"
  }

  voltarLista(msg: String){
    this.mode="list"
    this.managerEditado={
      id: -1,
      name: '',
      password: '',
      fone: '',
      foneOther: '',
      email: '',
      emailOther: '',
      inativo: false,
      admin: false
    }
  }

}
