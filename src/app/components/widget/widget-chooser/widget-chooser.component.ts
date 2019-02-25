import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  widget: Widget;
  url: any;

  // defaultWidgetValues =
  //   {
  //     'Heading': {type: 'Heading', 'size' : 1},
  //     'Image': {type: 'Image', width: '100%'},
  //     'YouTube': {type: 'YouTube', width: '100%'}
  //   };

  constructor(private widgetService: WidgetService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];

          console.log(this.websiteId);
          console.log(this.pageId);
        }
      );
  }

  // creating a widget with default values
  createWidget(widgetType: String) {

    const new_widget = new Widget('', widgetType, this.pageId, '1', 'text', '100%', '');
      // if (widgetType === 'HEADING') {
    //   this.widget = new Widget(undefined, 'HEADING', this.pageId, '1', '', '', '');
    // } else if (widgetType === 'IMAGE') {
    //   this.widget = new Widget(undefined, 'IMAGE', this.pageId, '', '', '100%', '');
    // } else if (widgetType === 'YOUTUBE') {
    //   this.widget = new Widget(undefined, 'YOUTUBE', this.pageId, '', '', '100%', '');
    // }

    // this.widget = this.defaultWidgetValues[widgetType];
    this.widgetService.createWidget(this.pageId, new_widget);
    console.log(new_widget);
    this.url = '/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget/' + new_widget._id;
    console.log(new_widget._id);
    this.router.navigate([this.url]);
  }
}
