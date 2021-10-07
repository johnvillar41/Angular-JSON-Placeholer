import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public user!: any;

  constructor(private dataService: DataService,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.user = params.detailId)
  }

  ngOnInit(): void {
    this.dataService.getUser(this.user).subscribe(
      (data: any) => {
        this.user = data;
        console.log(data);
      }
    );
  }

}
