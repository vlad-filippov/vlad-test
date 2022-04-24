import { Component } from '@angular/core';
import { PostApiService } from './post-api.service';
import { Observable } from 'rxjs';
import { PostModel } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public posts$: Observable<PostModel[]>;

 constructor(
   private postApiService: PostApiService,
 ) {
   this.posts$ = this.postApiService.getPosts();
 }
}
