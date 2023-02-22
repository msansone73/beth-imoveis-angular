import { Component, OnInit } from '@angular/core';
import { Landlord } from 'src/app/model/landlord';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';
import { LandlordService } from 'src/app/services/landlord/landlord.service';

@Component({
  selector: 'app-landlord-list',
  templateUrl: './landlord-list.component.html',
  styleUrls: ['./landlord-list.component.scss']
})
export class LandlordListComponent implements OnInit {


  landlords: Landlord[]=[]

  constructor(
    private landlordService : LandlordService,
    private auth: AuthenticationServiceService
  ){}

  ngOnInit(): void {

  }

  getLandLords(){
    this.landlordService.getAllByManagerId(this.auth.isLogged())
      .subscribe(
        data => this.landlords=data
      )
  }

  edit(id:number){
    console.log('foi editar'+id);
  }

  del(id:number){
    console.log('foi deletado'+id);
  }

  onNovo(){
    console.log('abrir novo')
  }

}
