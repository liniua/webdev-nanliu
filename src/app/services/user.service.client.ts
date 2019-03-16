import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {User} from '../models/user.model.client';
import { HttpClient } from '@angular/common/http';

// injecting services into module

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }


  createUser(username: String, password: String) {
    const body = {
      username: username,
      password: password
    };
    return this.http.post('http://localhost:8080/api/user', body);
  }

  findUserById(userId: String) {
    return this.http.get('http://localhost:8080/api/user/' + userId);
      // .pipe(map((response: Response) => {
      //   return response.json();
      // }));
  }

  findUserByUsername(username: String) {
    return this.http.get('http://localhost:8080/api/user?username=' + username);
  }

  findUserByCredentials(username: String, password: String) {
    return this.http.get('http://localhost:8080/api/user?username=' + username + '&password=' + password);
  }


  updateUser(user: User) {
    return this.http.put('http://localhost:8080/api/user/' + user._id, user);

  }

  deleteUser(userId: String) {
    return this.http.delete('http://localhost:8080/api/user/' + userId);
  }
}
