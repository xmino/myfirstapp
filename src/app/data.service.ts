import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { path } from './path';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    console.log('service is working');

  }

  getData(){
      return this.http.get<path[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
