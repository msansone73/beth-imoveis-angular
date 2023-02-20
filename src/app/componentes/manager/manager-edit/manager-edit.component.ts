import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Manager } from 'src/app/model/manager';
import { ManagerServiceService } from 'src/app/services/manager/manager-service.service';

@Component({
  selector: 'app-manager-edit',
  templateUrl: './manager-edit.component.html',
  styleUrls: ['./manager-edit.component.scss']
})
export class ManagerEditComponent {

  @Input()
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
  @Output() voltarLista= new EventEmitter<String>();

  constructor(
    private managerservice: ManagerServiceService
  ){}

  salvar(){
    this.managerservice.salvar(this.managerEditado).subscribe(
      d=>{
        this.voltarLista.emit("salvo com sucesso.")
      }
    )
  }

  voltar(){
    this.voltarLista.emit("")
  }

}
