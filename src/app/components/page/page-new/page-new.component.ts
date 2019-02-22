import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  @ViewChild('f') pageForm: NgForm;
  pageName: string;
  pageTitle: string;
  websiteID: string;
  constructor(private pageService: PageService, private activeRoute: ActivatedRoute, private router: Router) { }

  createPage() {
    this.pageName = this.pageForm.value.pageName;
    this.pageTitle = this.pageForm.value.title;
    const new_page = {_id: undefined, name: this.pageName, websiteId: this.websiteID, description: this.pageTitle};
    this.pageService.createPage(this.websiteID, new_page);
    console.log(new_page);
    console.log(this.pageService.pages);
  }
  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params: any) => {
        console.log(params['wid']);
        this.websiteID = params['wid'];
      });
  }

}
