import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Widget} from '../../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  @ViewChild('f') youtubeForm: NgForm;
  pageID: String;
  wgid: String;
  // width: String;
  // name: String;
  // text: String;
  // url: String;
  widget: Widget;
  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private route: Router) { }

  update () {
    this.widget.url = this.youtubeForm.value.url;
    this.widget.text = this.youtubeForm.value.text;
    this.widget.width = this.youtubeForm.value.width;

    this.widgetService.updateWidget(this.wgid, this.widget);
  }

  delete () {
    this.widgetService.deleteWidget(this.wgid);
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        console.log(params['pid']);
        this.pageID = params['pid'];
        console.log(params['wgid']);
        this.wgid = params['wgid'];
      }
    );

    this.widget = this.widgetService.findWidgetById(this.wgid);
    console.log(this.widget);
  }

}
