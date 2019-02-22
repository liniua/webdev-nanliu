import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Widget} from '../../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

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
    this.text = this.imageForm.value.text;
    this.url = this.imageForm.value.url;
    this.width = this.imageForm.value.width;

    console.log(this.text);

    const new_widget = new Widget(undefined, 'IMAGE', this.pageID,
      '1', this.text.toString(), this.width.toString(), this.url.toString());
    console.log(new_widget);

    this.widgetService.updateWidget(this.wgid, new_widget);
    console.log(this.widgetService.widgets);
  }

  delete() {
    this.widgetService.deleteWidget(this.wgid);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
        this.pageID = params['pid'];
        this.wgid = params['wgid'];
      });
    this.widget = this.widgetService.findWidgetById(this.wgid);
  }

}
