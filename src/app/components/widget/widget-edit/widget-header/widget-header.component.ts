import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Widget} from '../../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  @ViewChild('f') headerForm: NgForm;
  wgid: String;
  pageID: String;
  widget: Widget;
  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private route: Router) { }

  delete() {
    this.widgetService.deleteWidget(this.wgid);
  }

  update() {
    this.widget.text = this.headerForm.value.text;
    this.widget.size = this.headerForm.value.size;
    this.widgetService.updateWidget(this.wgid, this.widget);
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.pageID = params['pid'];
        this.wgid = params['wgid'];
      });
    if (this.wgid === undefined) {
      this.widget = new Widget(undefined, 'HEADER', this.pageID, '', '', '', '');
    } else {
      this.widget = this.widgetService.findWidgetById(this.wgid);
    }
  }

}
