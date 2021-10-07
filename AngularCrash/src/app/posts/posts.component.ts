import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts!: any;
  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataService.getPosts().subscribe(
      data => this.posts = data
    );
  }

}
