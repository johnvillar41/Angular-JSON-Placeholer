import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  public comments!: any;
  private id!: number;
  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.comments = params.postId;
      this.id = params.postId;
    })
  }

  ngOnInit(): void {
    this.dataService.getComments(this.id).subscribe(data => {
      this.comments = data;
      console.log(data);
    })
  }

}
