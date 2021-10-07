import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/models/postModel';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts!: Array<PostModel>;
  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataService.getPosts().subscribe(
      (comments:Array<PostModel>) => {
        this.posts = comments;
        console.log(comments);
      }
    );
  }

}
