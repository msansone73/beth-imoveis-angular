import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Landlord } from 'src/app/model/landlord';
import { Manager } from 'src/app/model/manager';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';
import { LandlordService } from 'src/app/services/landlord/landlord.service';

@Component({
  selector: 'app-landlord-edit',
  templateUrl: './landlord-edit.component.html',
  styleUrls: ['./landlord-edit.component.scss']
})
export class LandlordEditComponent {

  constructor(
    private landlordService : LandlordService,
    private auth : AuthenticationServiceService
  ){}

  @Input()
  landlordEdited: Landlord = new Landlord()

  @Output()
  voltarLista = new EventEmitter<String>()

  salvar(){
    this.landlordEdited.manager=this.auth.isLogged()
    this.landlordService.salvar(this.landlordEdited)
      .subscribe(
        d=> this.voltarLista.emit('salvo com sucesso')
      )
  }

  voltar(){
    this.voltarLista.emit('')
  }

}
