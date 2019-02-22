
import {Injectable} from '@angular/core';
import {Widget} from '../models/widget.model.client';

@Injectable()
export  class WidgetService {

  // constructor(_id:String, type:String, pageId:String, size= '1', text = 'text', url = 'url', width = '100%')
  widgets = [
    new Widget('123', 'HEADING', '321', '2', 'GIZMODO', '', ''),
    new Widget('234', 'HEADING', '321', '4', 'Lorem ipsum', '', ''),
    new Widget('345', 'IMAGE', '321', '', '', '100%', 'http://lorempixel.com/400/200/'),
    new Widget('678', 'YOUTUBE', '321', '', '', '100%', 'https://www.youtube.com/embed/AM2Ivdi9c4E')
  ];

  createWidget(pageId: String, widget: Widget) {
    widget.pageId = pageId;
    this.widgets.push(widget);
  }

  findWidgetsByPageId(pageId: String) {
    const resultSet = [];
    for ( const i in this.widgets) {
      if (this.widgets[i].pageId === pageId) {
        resultSet.push(this.widgets[i]);
      }
    }
    return resultSet;
  }

  findWidgetById(widgetId: String) {
    return this.widgets.find(function (widget) {
      return widget._id === widgetId;
    });
  }

  updateWidget(widgetId: String, widget: Widget) {
    for ( const i in this.widgets ) {
      if ( this.widgets[i]._id === widgetId ) {
        switch (widget.widgetType) {
          case 'HEADING':
            this.widgets[i].text = widget.text;
            this.widgets[i].size = widget.size;
            return true;

          case 'IMAGE':
            this.widgets[i].text = widget.text;
            this.widgets[i].url = widget.url;
            this.widgets[i].width = widget.width;
            return true;

          case 'YOUTUBE':
            this.widgets[i].text = widget.text;
            this.widgets[i].size = widget.size;
            this.widgets[i].url = widget.url;
            this.widgets[i].width = widget.width;
            return true;

          case 'HTML':
            this.widgets[i].text = widget.text;
            return true;
        }

      }
    }
    return false;
  }

  deleteWidget(widgetId: String) {
    for (const i in this.widgets) {
      if (this.widgets[i]._id === widgetId) {
        const j = +i;
        this.widgets.splice(j, 1);
      }
    }
  }
}
