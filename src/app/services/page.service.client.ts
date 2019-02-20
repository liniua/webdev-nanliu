import {Injectable} from '@angular/core';


@Injectable()
export class PageService {

  pages = [
    { _id: '321', name: 'Post 1', websiteId: '456', description: 'Lorem'},
    { _id: '432', name: 'Post 2', websiteId: '456', description: 'Lorem'},
    { _id: '543', name: 'Post 3', websiteId: '456', description: 'Lorem'}
  ];

  createWebsite(websiteId: string, page: any) {

    const new_page = {
      _id: (new Date()).getTime() + '',
      name: page.name,
      websiteId: page.websiteId,
      description: page.description
    };

    this.pages.push(new_page);
  }

  findPageByWebsiteId(websiteId: string) {
    const resultSet = [];
    for ( const i in this.pages) {
      if (this.pages[i].websiteId === websiteId) {
        resultSet.push(this.pages[i]);
      }
    }
    return resultSet;
  }

  findPageById(pageId: string) {
    return this.pages.find(function (page) {
      return page._id === pageId;
    });
  }

  updatePage(pageId: String, page: any) {
    for (const i in this.pages) {
      if (this.pages[i]._id === pageId) {
        this.pages[i].name = page.name;
        this.pages[i].websiteId = page.websiteId;
        this.pages[i].description = page.description;
      }
    }
  }

  deleteWebsite(pageId: string) {
    for (const i in this.pages) {
      if (this.pages[i]._id === pageId) {
        const j = +i;
        this.pages.splice(j, 1);
      }
    }
  }
}
