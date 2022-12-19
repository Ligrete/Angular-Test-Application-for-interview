import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { PostsApiService } from '../../services/posts-api.service';
/**
 * This component shows details about specific post.
 **/
@Component({
  standalone: true,
  imports: [
    CommonModule,
  ],
  selector: 'app-post',
  template: `
    <ng-container *ngIf="post">
    <h1>{{ post.title }}</h1>
    <button (click)="removePost(post.id)">Remove</button>  
    </ng-container>
  `,
  styles: [
    `
  :host {
    width: 100%
    bacground: red;
  }
  `,
  ],
})
export class PostCardComponent implements OnInit {
  @Input() postId: string; // Если изменить на объект post, что изменится?
  @Output() removed = new EventEmitter<any>();
  post: any;

  constructor(private postsApi: PostsApiService) {}

  removePost(id: string): void {
    this.removed.emit(id);
  }

  ngOnInit(): void {
    
    this.postsApi.getPostById(this.postId).subscribe((post: any) => {
      console.log(this.postId, post)
      this.post = post;
      this.postsApi.postViewed(this.postId).subscribe();
    });
  }
}