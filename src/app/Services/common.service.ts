import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  /* LOADING MENUS */
  getMenus() {

    const Menus = [
      {
        "MenuID": 1, "MenuName": "About Us", "path": "about-us",    
      },
      {
        "MenuID": 2, "MenuName": "Product", "path": "",
        "Pages": [
          { "path": "page2", "PageName": "Business Application",
          "Pages": [
              { "path": "page2", "SubPageName": "Radix" },
              { "path": "page2", "SubPageName": "Radix" },
              { "path": "page2", "SubPageName": "Radix" },
              { "path": "page2", "SubPageName": "Radix" }
            ]
          },
          { "path": "page2", "PageName": "Verticals" ,
          "Pages": [
              { "path": "page2", "SubPageName": "Radix" },
              { "path": "page2", "SubPageName": "Radix" },
              { "path": "page2", "SubPageName": "Radix" },
              { "path": "page2", "SubPageName": "Radix" },
              { "path": "page2", "SubPageName": "Radix" }
            ]
          },
          { "path": "page2", "PageName": "ERP Solutions",
          "Pages": [
            { "path": "page2", "SubPageName": "Radix" },
            { "path": "page2", "SubPageName": "Radix" },
            { "path": "page2", "SubPageName": "Radix" },
            { "path": "page2", "SubPageName": "Radix" },
            { "path": "page2", "SubPageName": "Radix" }
           ]   
          },
        ]
      },
      { "MenuID": 3, "MenuName": "Customer", "path": "", },
      { "MenuID": 5, "MenuName": "Partners", "path": "", },
      { "MenuID": 6, "MenuName": "Support", "path": "", },
      { "MenuID": 7, "MenuName": "Contact Us", "path": "contact-us", },
    ]  
    return Menus;
  }
}
