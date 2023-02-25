import { Component } from '@angular/core';
import { Landlord } from 'src/app/model/landlord';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';
import { LandlordService } from 'src/app/services/landlord/landlord.service';

@Component({
  selector: 'app-landlord-content',
  templateUrl: './landlord-content.component.html',
  styleUrls: ['./landlord-content.component.scss']
})
export class LandlordContentComponent {

  constructor(
    private landlordService: LandlordService,
    private auth: AuthenticationServiceService
  ){}

  landlordEdited = new Landlord()
  mode="list"


  alteraIdEdited(id:number){
    this.mode='edit'
    if (id!=-1){
      this.landlordService
        .getByIdAndManagerId(id, this.auth.isLogged())
        .subscribe(data=> this.landlordEdited=data)
    }
  }

  voltarLista(msg:String){
    this.mode='list'
    this.landlordEdited= new Landlord()
  }

}
