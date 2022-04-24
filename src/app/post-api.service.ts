import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
