import {Injectable} from '@angular/core';
import {Website} from '../models/website.model.client';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class WebsiteService {

  constructor(private http: HttpClient) {}
  // websites = [
  //   new Website('123', 'Facebook', '456', 'Lorem'),
  //   new Website('234', 'Tweeter', '456', 'Lorem'),
  //   new Website('456', 'Gizmodo', '456', 'Lorem'),
  //   new Website('890', 'Go', '123', 'Lorem'),
  //   new Website('567', 'Tic Tac Toe', '123', 'Lorem'),
  //   new Website('678', 'Checkers', '123', 'Lorem'),
  //   new Website('789', 'Chess', '234', 'Lorem')
  //
  // ];

  createWebsite(userId: String, website: Website) {
    const body = website;
    const url = 'http://localhost:8080/api/user/' + userId + '/website';
    console.log(body);
    return this.http.post(url, body);
  }

  findWebsitesByUser(userId: String) {
    return this.http.get('http://localhost:8080/api/user/' + userId + '/website');
  }

  findWebsitesById(userId: String, websiteId: String) {
    return this.http.get('http://localhost:8080/api/user/' + userId + '/website/' + websiteId);
  }

  updateWebsite(userId: String, websiteId: String, website: Website) {

    const url = 'http://localhost:8080/api/user/' + userId + '/website/' + websiteId;
    const body = website;
    return this.http.put(url, body);
  }

  deleteWebsite(userId: String, websiteId: String) {
    const url = 'http://localhost:8080/api/user/' + userId + '/website/' + websiteId;
    return this.http.delete(url);
  }
}
