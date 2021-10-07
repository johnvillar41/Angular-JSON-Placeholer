import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { CommentModel } from 'src/models/commentModel';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit, OnDestroy {
  public comments: Array<CommentModel> = [];

  private id!: number;
  private commentSub: Subscription = new Subscription;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.comments = params.postId;
      this.id = params.postId;
    })
  }

  ngOnDestroy(): void {
    if (this.commentSub) {
      this.commentSub.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.dataService.getComments(this.id).subscribe((comments: Array<CommentModel>) => {
      this.comments = comments;
      console.log(this.comments);
    });
  }
}
