import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  wgid: string;
  widget: {};
  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['wgid']);
      this.wgid = params['wgid'];
    });

    this.widget = this.widgetService.findWidgetById(this.wgid);
  }

}
