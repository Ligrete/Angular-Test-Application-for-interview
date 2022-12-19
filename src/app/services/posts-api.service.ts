import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class PostsApiService {

  constructor() { }

  getPostById(id: string) {
    console.log('getPostById', id);
    const posts = 
      [
        {
          id: '0',
          title: 'title 0 ',
          description: 'description 0'
        },
        {
          id: '1',
          title: 'title 1 ',
          description: 'description 1'
        },
        {
          id: '2',
          title: 'title 2 ',
          description: 'description 2'
        }
      ];
    return of(
      posts.filter((val) => val?.id === id)[0]
    ).pipe(delay(1000))
  }

  postViewed(id: string) {
    console.log('postViewed', id);
    return of(true).pipe(delay(500))
  }

}