import { CommonModule } from "@angular/common";
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";

import { PostsApiService } from "../../services/posts-api.service";
/**
 * This component shows details about specific post.
 **/
@Component({
  standalone: true,
  imports: [CommonModule],
  selector: "app-post",
  template: `
    <ng-container *ngIf="post">
      <h1>{{ post.title }}</h1>
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
        flex-direction: row;
        justify-content: flex-start;
        gap: 16px;
        margin: 16px auto;
      }
    `,
  ],
})
export class PostCardComponent implements OnInit, OnChanges {
  /**
   * Если изменить на объект post, что изменится?
   */
  @Input() postId: string;
  @Output() removed = new EventEmitter<any>();
  post: any;

  constructor(private postsApi: PostsApiService) {}

  removePost(id: string): void {
    this.removed.emit(id);
  }

  ngOnInit(): void {
    this.postsApi.getPostById(this.postId).subscribe((post: any) => {
      console.log(this.postId, post);
      this.post = post;
      this.postsApi.postViewed(this.postId).subscribe();
    });
  }

  ngOnChanges(): void {
    console.log("ngOnChanges", this.postId);
  }
}
