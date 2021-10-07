import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users!: any;
  constructor(private dataService: DataService) { }

  ngOnInit() : void {
    this.dataService.getUsers().subscribe(
      data => this.users = data
    );
  }

}
