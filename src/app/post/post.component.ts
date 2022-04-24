import { Component, Input } from '@angular/core';
import { PostModel } from '../post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() public post: PostModel;
  public toggleId: boolean;
}
