import { Component, OnInit } from '@angular/core';
import { PostApiService } from './post-api.service';
import { Observable } from 'rxjs';
import { PostModel } from './post.model';
import { Store } from '@ngxs/store';
import { PostsSelectors } from './state/posts.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public postsObservable$: Observable<PostModel[]>;

  constructor(
    private postApiService: PostApiService,
    private store: Store,
  ) {
    this.postsObservable$ = this.postApiService.getPostsObservable();
    this.postApiService.getPostsFetch();
  }

  public ngOnInit(): void {
    this.store.select(PostsSelectors.getPosts).subscribe(postsFromStore => {
      console.log('postsFromStore', postsFromStore);
    });
  }
}
