import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  daUseri() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  daUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId);
  }

  daPostari() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

}
