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
        "MenuID": 2, "MenuName": "Softwares", "path": "",
        "Pages": [
          { "path": "page2", "PageName": "Retail Softwares",
          "Pages": [
              { "path": "page2", "SubPageName": "Kirana/Grocery Shop Software" },
              { "path": "page2", "SubPageName": "POS Software" },
              { "path": "page2", "SubPageName": "Jewellery Software" },
              { "path": "page2", "SubPageName": "Restaurant Software" },
              { "path": "page2", "SubPageName": "Garment Software" },
              { "path": "page2", "SubPageName": "Jewellery Software" },
              { "path": "page2", "SubPageName": "POS Software" },
              { "path": "page2", "SubPageName": "Jewellery Software" }
            ]
          },
          { "path": "page2", "PageName": "Distribution Softwares" ,
          "Pages": [
              { "path": "page2", "SubPageName": "Pharma Distribution Software" },
              { "path": "page2", "SubPageName": "FMCG Distribution Software" },
              { "path": "page2", "SubPageName": "Mandi(AADHAT) Software" },
              { "path": "page2", "SubPageName": "Warehouse Manangement Software" },
              { "path": "page2", "SubPageName": "Automobile Software" },
              { "path": "page2", "SubPageName": "Supply Chain Management" },
              { "path": "page2", "SubPageName": "DMSXpert/Multi-location Software" }
            ]
          },
          { "path": "page2", "PageName": "Manufacturing Softwares",
          "Pages": [
            { "path": "page2", "SubPageName": "ERP Software Solution" },
            { "path": "page2", "SubPageName": "Pharmaceutical Manufacturing Software" },
            { "path": "page2", "SubPageName": "Ayurvedic &amp; Homeopathic Software" },
            { "path": "page2", "SubPageName": "Automobile Industry Software" },
            { "path": "page2", "SubPageName": "Textile Software" },
            { "path": "page2", "SubPageName": "Assembling Industry Software" },
            { "path": "page2", "SubPageName": "Process Manufacturing Software" },
            { "path": "page2", "SubPageName": "Food &amp; Beverage Industry Software" }
           ]   
          },
        ]
      },
      {
        "MenuID": 3, "MenuName": "Products", "path": "",
        "Pages": [
          { "path": "page2", "PageName": "Other solutions",
          "Pages": [
              { "path": "page2", "SubPageName": "Kirana/Grocery Shop Software" },
              { "path": "page2", "SubPageName": "POS Software" },
              { "path": "page2", "SubPageName": "Jewellery Software" },
              { "path": "page2", "SubPageName": "Restaurant Software" },
              { "path": "page2", "SubPageName": "Garment Software" },
              { "path": "page2", "SubPageName": "Jewellery Software" },
              { "path": "page2", "SubPageName": "POS Software" },
              { "path": "page2", "SubPageName": "Jewellery Software" }
            ]
          },
          { "path": "page2", "PageName": "Erp" ,
          "Pages": [
              { "path": "page2", "SubPageName": "Pharma Distribution Software" },
              { "path": "page2", "SubPageName": "FMCG Distribution Software" },
              { "path": "page2", "SubPageName": "Mandi(AADHAT) Software" },
              { "path": "page2", "SubPageName": "Warehouse Manangement Software" },
              { "path": "page2", "SubPageName": "Automobile Software" },
              { "path": "page2", "SubPageName": "Supply Chain Management" },
              { "path": "page2", "SubPageName": "DMSXpert/Multi-location Software" }
            ]
          },
          { "path": "page2", "PageName": "Mobile Apps",
          "Pages": [
            { "path": "page2", "SubPageName": "ERP Software Solution" },
            { "path": "page2", "SubPageName": "Pharmaceutical Manufacturing Software" },
            { "path": "page2", "SubPageName": "Ayurvedic & Homeopathic Software" },
            { "path": "page2", "SubPageName": "Automobile Industry Software" },
            { "path": "page2", "SubPageName": "Textile Software" },
            { "path": "page2", "SubPageName": "Assembling Industry Software" },
            { "path": "page2", "SubPageName": "Process Manufacturing Software" },
            { "path": "page2", "SubPageName": "Food &amp; Beverage Industry Software" }
           ]   
          },
        ]
      },
      { "MenuID": 4, "MenuName": "Customers", "path": "customer", },
      { "MenuID": 5, "MenuName": "Partners", "path": "partner", },
      { "MenuID": 8, "MenuName": "Support", "path": "", },
      { "MenuID": 9, "MenuName": "Contact us", "path": "contact-us", },
    ]  
    return Menus;
  }
}
