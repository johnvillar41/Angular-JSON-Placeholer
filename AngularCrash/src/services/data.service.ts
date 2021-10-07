import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from 'src/models/userModel';
import { map } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getUsers() {
    return this.http.get<Array<UserModel>>('https://jsonplaceholder.typicode.com/users');
  }

  public getUser(userId: number): Observable<UserModel> {
    return this.http.get<UserModel>('https://jsonplaceholder.typicode.com/users/' + userId);
  }

  public getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  public getComments(postId: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  }
}
