import { PostModel } from '../post.model';

export class AddPosts {
  public static readonly type = '[PostState] Add posts';

  constructor(public posts: PostModel[]) {
  }
}
