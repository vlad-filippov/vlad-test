import { Selector } from '@ngxs/store';
import { PostsState } from './posts.state';
import { PostsStateModel } from './posts-state.model';
import { PostModel } from '../post.model';

export class PostsSelectors {
  @Selector([PostsState])
  public static getPosts(state: PostsStateModel): PostModel[] {
    return state.posts;
  }
}
