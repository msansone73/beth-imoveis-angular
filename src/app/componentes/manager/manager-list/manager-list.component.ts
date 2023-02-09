import { Component, OnInit } from '@angular/core';
import { Manager } from 'src/app/model/manager';
import { ManagerServiceService } from 'src/app/services/manager/manager-service.service';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.scss']
})
export class ManagerListComponent implements OnInit {

  managers: Manager[] = [];

  constructor(
    public managerservice: ManagerServiceService
  ) {}

  ngOnInit(): void {
    this.getManagers();
  }

  getManagers(){
    this.managerservice.getAllManagers().subscribe(
      data => {
        this.managers=data;
      });
  }

  edit(id:number){
    console.log('foi editar'+id);

  }

  del(id:number){
    console.log('foi deletado'+id);

  }

}
