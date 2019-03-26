import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Widget} from '../../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  @ViewChild('f') imageForm: NgForm;
  pageID: String;
  wgid: String;
  websiteId: String;
  userId: String;
  width: String;
  name: String;
  text: String;
  url: String;
  widget: Widget;
  baseUrl: String;

  constructor(private activatedRoute: ActivatedRoute,
              private widgetService: WidgetService,
              private route: Router) {}

  upload() {
    this.text = this.imageForm.value.text;
    this.url = this.imageForm.value.url;
    this.width = this.imageForm.value.width;

    const new_widget = new Widget(undefined, 'IMAGE', this.pageID,
      '1', this.text.toString(), this.width.toString(), this.url.toString());
    this.widgetService.createWidget(this.pageID, new_widget);
  }

  update() {
    this.widgetService.updateWidget(this.wgid, this.widget)
      .subscribe(
        (data: any) => this.route.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageID, 'widget']),
        (error: any) => console.log(error)
      );
  }

  delete() {
    this.widgetService.deleteWidget(this.wgid) .subscribe(
      (data: any) => this.route.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageID, 'widget']),
      (error: any) => console.log(error)
    );
  }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
        this.pageID = params['pid'];
        this.wgid = params['wgid'];
      });
    this.widgetService.findWidgetById(this.wgid)
      .subscribe(
        (data: any) => this.widget = data,
        (error: any) => console.log(error)
      );
  }

}
