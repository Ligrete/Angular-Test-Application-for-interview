import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  postIds = [];

  posts = [
    {
      id: '123',
      title: 'test',
      description: 'desc',
      target: {
        createdAt: '',
        viewed: true
      }
    }
  ];

  constructor() {
    // this.postIds = this.postIds.concat(['0', '1', '2']);

    this.setPostTitle();
    // this.setPostObject()
  }

  setPostTitle() {
    let index = 0;
    setInterval(() => {
      // this.posts[0] = {
      //   ...this.posts[0],
      //   title: 'title' + index
      // };

      this.posts[0]['target'] = { createdAt: ''+ index, viewed: false};
      this.posts[0]['title']='changed' + index;
      index++;
    }, 1000)
  }

  setPostObject() {
    let index = 0;
    setInterval(() => {
      this.posts[0].target = {
        createdAt: 'asdasd' + index,
        viewed: false
      }

      index++;
    }, 1000)
  }
}
