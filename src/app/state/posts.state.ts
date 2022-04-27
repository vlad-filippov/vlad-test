import { Action, State, StateContext } from '@ngxs/store';
import { PostsStateModel } from './posts-state.model';
import { Injectable } from '@angular/core';
import { AddPosts } from './posts.actions';

@State<PostsStateModel>({ name: 'posts' })
@Injectable()
export class PostsState {
  @Action(AddPosts)
  public addPosts(ctx: StateContext<PostsStateModel>, { posts }: AddPosts): void {
    ctx.patchState({ posts });
  }
}
