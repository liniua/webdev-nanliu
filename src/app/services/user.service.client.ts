import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {User} from '../models/user.model.client';
import { HttpClient } from '@angular/common/http';

// injecting services into module

@Injectable()
export class UserService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }


  createUser(username: String, password: String) {
    const body = {
      username: username,
      password: password
    };
    return this.http.post(this.baseUrl + '/api/user/', body);
  }

  findUserById(userId: String) {
    return this.http.get(this.baseUrl + '/api/user/' + userId);
      // .pipe(map((response: Response) => {
      //   return response.json();
      // }));
  }

  findUserByUsername(username: String) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username);
  }

  findUserByCredentials(username: String, password: String) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password);
  }


  updateUser(user: User) {
    return this.http.put(this.baseUrl + '/api/user/' + user._id, user);

  }

  deleteUser(userId: String) {
    return this.http.delete(this.baseUrl + '/api/user/' + userId);
  }
}
