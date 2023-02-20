import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Manager } from 'src/app/model/manager';
import { ManagerServiceService } from 'src/app/services/manager/manager-service.service';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.scss']
})
export class ManagerListComponent implements OnInit {
[x: string]: any;

  managers: Manager[] = [];
  @Input()
  idEditado: number=-1
  @Output() mudouId = new EventEmitter<number>();

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
    this.mudouId.emit(id)
  }

  del(id:number){
    console.log('foi deletado'+id);

  }

  onNovo(){
    console.log('abrir novo')
    this.mudouId.emit(-1)
  }

}
