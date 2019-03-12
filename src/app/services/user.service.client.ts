import { Injectable } from '@angular/core';


import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {User} from '../models/user.model.client';


// injecting services into module

@Injectable()
export class UserService {

  constructor() { }

  users = [
    new User('123', 'alice', 'alice', 'Alice',  'Wonder', 'alice@me.com'),
    new User('234', 'bob', 'bob',  'Bob',  'Marley', 'bob@gmail.com'),
    new User('345', 'charly', 'charly', 'Charly', 'Garcia', 'charly@gmail.com'),
    new User( '456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi', 'jannunzi@me.com')

  ];

  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'findUserByCredentials' : this.findUserByCredentials,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser
  };

  createUser(user: User) {
    user._id = Math.random().toString();
    this.users.push(user);
    return user;
  }

  findUserById(userId: String) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {  return this.users[x]; }
    }
  }

  findUserByUsername(username: String) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username) {  return this.users[x]; }
    }
  }
  findUserByCredentials(username: String, password: String) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username && this.users[x].password === password) {
        return this.users[x];
      }
    }
  }
  updateUser(userId: String, user: User) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === userId) {
        this.users[i].username = user.username;
        this.users[i].firstName = user.firstName;
        this.users[i].lastName = user.lastName;
        this.users[i].email = user.email;
        return this.users[i];
      }
    }
  }
  deleteUser(userId: String) {
    for (const i in this.users) {
      if (this.users[i]._id === userId) {
        const j = +i;
        this.users.splice(j, 1);
      }
    }
  }
}
