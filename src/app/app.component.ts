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
  }
}
