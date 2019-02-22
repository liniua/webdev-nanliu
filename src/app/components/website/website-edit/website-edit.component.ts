import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  @ViewChild('f') websiteForm: NgForm;
  wid: string;
  websiteName: string;
  description: string;
  userId: string;
  websites = [];
  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.wid = params['wid'];
        console.log(this.wid);
        this.userId = params['uid'];
        console.log(this.userId);
      });
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
  }

  updateWebsite() {
    if (this.websiteForm.value.webname === '') {
      alert('Please input new web name');
      return;
    }
    this.websiteName = this.websiteForm.value.websiteName;
    this.description = this.websiteForm.value.description;
    const new_website = {_id: this.wid, name: this.websiteName, developerId: this.userId, description: this.description};
    this.websiteService.updateWebsite(this.wid, new_website);
  }
  deleteWeb() {
    console.log(this.wid);
    this.websiteService.deleteWebsite(this.wid);
    console.log(this.websiteService.websites);
  }

}
