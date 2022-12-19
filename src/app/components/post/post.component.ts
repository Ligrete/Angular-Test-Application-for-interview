import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { switchMap, take, takeLast, tap } from 'rxjs';

export interface Post {
  id: string;
  title: string;
  description: string;
  target?: any
}

import { PostsApiService } from '../../services/posts-api.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-post',
  template: `
    <ng-container *ngIf="post">
      <h1>{{ post.title }} {{ post.target.createdAt }}</h1>
      <button (click)="removePost(post.id)">Remove</button>
    </ng-container>
  `,
  styles: [
    `
      :host {
        width: 100%;
        background-color: rgba(236, 234, 249, 0.5);
        border: #c39ada69 1px solid;
        height: 50px;
        padding: 15px;
        box-sizing: border-box;
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: flex-start;
        gap: 16px;
        margin: 16px auto;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCardComponent implements OnInit, OnChanges {
  /**
   * Если изменить на объект post, что изменится?
   */
  @Input() postId: string;
  @Output() removed = new EventEmitter<any>();
  @Input() post: Post;

  constructor(private postsApi: PostsApiService) {
    console.log('consctructor');
  }

  removePost(id: string): void {
    this.removed.emit(id);
  }

  ngOnInit(): void {
    console.log('ngOnInit()');

    if(this.postId) this.getPost(this.postId);
  }

  ngOnChanges(): void {
    console.log('ngOnChanges()', this.post);
  }

  getPost(id: string): void {
    /**
     * Как убрать вложенные подписки?
     */
    this.postsApi.getPostById(this.postId).subscribe((post: any) => {
      this.post = post;
      this.postsApi.postViewed(this.postId).subscribe();
    });
  }
}
