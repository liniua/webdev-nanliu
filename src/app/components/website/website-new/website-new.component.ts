import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  @ViewChild('f') webForm: NgForm;
  userId: string;
  websites = [];
  webname: string;
  description: string;

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
    });
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
  }

  createWeb() {

    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
    });
    this.webname = this.webForm.value.webname;
    this.description = this.webForm.value.description;
    const new_website = {_id: undefined, name: this.webname, developerId: this.userId, description: this.description};

    console.log('new website: ' + new_website);

    this.websiteService.createWebsite(this.userId, new_website);

    console.log(this.websiteService.websites);
  }
}
