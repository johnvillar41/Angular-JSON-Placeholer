import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/models/userModel';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  public users!: Array<UserModel>;

  private userSub: Subscription = new Subscription;
  constructor(private dataService: DataService) { }

  ngOnDestroy(): void {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.userSub = this.dataService.getUsers().subscribe(
      (user: Array<UserModel>) => {
        this.users = user;
        console.log(user);
        console.log(typeof (user));
      }
    );
  }

}
