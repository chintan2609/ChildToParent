import { Component, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 
  @Output() parentComponent:EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    this.parentComponent.emit({name:"chintan", age:25})
  }

  sendData()
  {
    let item = {name:"chintan", age:25};
    this.parentComponent.emit(item)
  }

}
