import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/models/userModel';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public user!: UserModel;
  private userId!: number;
  constructor(private dataService: DataService,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.userId = params.detailId)
  }

  ngOnInit(): void {
    console.log(this.user);
    this.dataService.getUser(this.userId).subscribe((user: UserModel) => {
      this.user = user;
      console.log(this.user);
    });
  }

}
export interface APIResponse {
  results: number;
}
