import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/*
En service som hämtar användardata från JSON placeholder.
*/
export class UsersService {
  urls: any = {
    users: 'https://jsonplaceholder.typicode.com/users'
  }

  constructor(private http: HttpClient) { }

  //Individuell användare från JSON placeholder listan
  public getUser(id): Observable<any> {
    return this.http.get(this.urls.users + "/" + id)
  }

  //Lista med användare från JSON placeholder
  public getUsers(): Observable<any> {
    return this.http.get(this.urls.users)
  }
}
