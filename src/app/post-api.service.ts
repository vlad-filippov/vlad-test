import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel } from './post.model';
import { Store } from '@ngxs/store';
import { AddPosts } from './state/posts.actions';

@Injectable({
  providedIn: 'root',
})
export class PostApiService {
  constructor(
    private http: HttpClient,
    private store: Store,
  ) {
  }

  public getPostsObservable(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts');
  }

  public getPostsFetch(): void {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        this.store.dispatch(new AddPosts(data));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}
