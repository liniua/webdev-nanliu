import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  @ViewChild('f') pageForm: NgForm;
  pageID: string;
  pageName: string;
  pageTitle: string;

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) { }

  updatePage() {
    this.pageName = this.pageForm.value.pageName;
    this.pageTitle = this.pageForm.value.title;
    const new_page = {_id: this.pageID, name: this.pageName, websiteId: undefined, description: this.pageTitle};
    this.pageService.updatePage(this.pageID, new_page);
    console.log(this.pageService.pages);
  }
  deletePage() {
    this.pageService.deletePage(this.pageID);
  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('pid'));
      this.pageID = params.get('pid');
    });
  }

}
