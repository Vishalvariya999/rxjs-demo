import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AsyncSubject,
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Videoslist } from '../interface/common';

@Injectable({
  providedIn: 'root',
})
export class AddVideosElementService {
  badge = new Subject<boolean>();
  changeName = new BehaviorSubject<string>('Vishal');

  public videoEmmit = new ReplaySubject<string>(2);
  public asyncvideoEmmit = new AsyncSubject();
  public api: string = 'https://dummyjson.com/';
  public uxTrenz: string =
    'https://my-json-server.typicode.com/Uxtrendz/apis/videoList';

  constructor(private http: HttpClient) {}

  printElement(value: any, eleContainerId: any) {
    let element = document.createElement('li');
    element.innerText = value;
    document.getElementById(eleContainerId)?.appendChild(element);
  }

  fetchData() {
    return this.http.get(`${this.api}users`);
  }

  fetchUxData(search: any): Observable<Videoslist> {
    return this.http.get<Videoslist>(`${this.uxTrenz}?q=${search}`);
  }

  fetchRequest(): Observable<any> {
    return this.http.get(`${this.api}products`);
  }

  fetchProduct() {
    return this.http.get(`${this.api}products`);
  }
}
