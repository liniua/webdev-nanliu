import {Injectable} from '@angular/core';
import {Page} from '../models/page.model.client';


@Injectable()
export class PageService {

  pages = [
    new Page('321', 'Post 1', '456', 'Lorem'),
    new Page('432', 'Post 2', '456', 'Lorem'),
    new Page( '543', 'Post 2-1', '567', 'Lorem'),
    new Page('911', 'Post 2-2', '567', 'Lorem'),
    new Page('687', 'Post 3-1', '890', 'Lorem'),
    new Page('329', 'Post 3-1', '890', 'Lorem')
  ];

  createPage(websiteId: String, page: Page) {

    const new_page = new Page((new Date()).getTime() + '', page.name, page.websiteId, page.title);
    this.pages.push(new_page);
  }

  findPageByWebsiteId(websiteId: String) {
    const resultSet = [];
    for ( const i in this.pages) {
      if (this.pages[i].websiteId === websiteId) {
        resultSet.push(this.pages[i]);
      }
    }
    return resultSet;
  }

  findPageById(pageId: String) {
    return this.pages.find(function (page) {
      return page._id === pageId;
    });
  }

  updatePage(pageId: String, page: Page) {
    for (const i in this.pages) {
      if (this.pages[i]._id === pageId) {
        this.pages[i].name = page.name;
        this.pages[i].title = page.title;
      }
    }
  }

  deletePage(pageId: String) {
    for (const i in this.pages) {
      if (this.pages[i]._id === pageId) {
        const j = +i;
        this.pages.splice(j, 1);
      }
    }
  }
}
