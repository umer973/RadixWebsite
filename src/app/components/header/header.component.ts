import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  menus: any;

  constructor() { 
   }

  ngOnInit(): void {
    this.menus = [] = this.getMenus();
    console.log(this.menus, " -- Load Menus--");
  }

  /* LOADING MENUS */
  getMenus() {

    const Menus = [
      {
        "MenuID": 1, "MenuName": "About Us", "path": "",    
      },
      {
        "MenuID": 2, "MenuName": "Product", "path": "",
        "Pages": [
          { "path": "page2", "PageName": "Business Application",
          "Pages": [
              { "path": "page2", "SubPageName": "Reckon-B2C" },
              { "path": "page2", "SubPageName": "Reckon-B2B" },
              { "path": "page2", "SubPageName": "Reckon-Orders" },
              { "path": "page2", "SubPageName": "Reckon-Mreport" }
            ]
          },
          { "path": "page2", "PageName": "Verticals" ,
          "Pages": [
              { "path": "page2", "SubPageName": "Automobiles Parts & Spares" },
              { "path": "page2", "SubPageName": "Bakery & Confectionery" },
              { "path": "page2", "SubPageName": "Books & Stationery" },
              { "path": "page2", "SubPageName": "Ceramics Tiles & Sanitary" },
              { "path": "page2", "SubPageName": "Chemist Shop" },
              { "path": "page2", "SubPageName": "Cosmetics & Personal Care" },
              { "path": "page2", "SubPageName": "Department & Grocery (POS)" },
              { "path": "page2", "SubPageName": "Dry Fruits & Spices" },
              { "path": "page2", "SubPageName": "Eyewear Stores" },
              { "path": "page2", "SubPageName": "Footwear Showroom" },
              { "path": "page2", "SubPageName": "Furniture & Home Decor" },
              { "path": "page2", "SubPageName": "FMCG Distribution" },
              { "path": "page2", "SubPageName": "Garments & Apparel Showroom" }
            ]
          },
          { "path": "page2", "PageName": "ERP Solutions",
          "Pages": [
            { "path": "page2", "SubPageName": "Specialized Supermarket" },
            { "path": "page2", "SubPageName": "Specialized Auto Parts" },
            { "path": "page2", "SubPageName": "Specialized Pharmacy" },
            { "path": "page2", "SubPageName": "Multi Location–Branch Synchronization" },
            { "path": "page2", "SubPageName": "Solution" }
           ]   
          },
        ]
      },
      { "MenuID": 3, "MenuName": "Customer", "path": "", },
      { "MenuID": 4, "MenuName": "Alliance", "path": "", },
      { "MenuID": 5, "MenuName": "Partners", "path": "", },
      { "MenuID": 6, "MenuName": "Support", "path": "", },
      { "MenuID": 7, "MenuName": "Contact Us", "path": "", },
      { "MenuID": 8, "MenuName": "Tutorial", "path": "", },
    ]  
    return Menus;
  }
  /*MENU CONDITION*/
  getClass(menu) {
    if (menu == "Product") {
      return "fa fa-angle-down";
    }
  }
  /*MOBILE MENU*/
  openNav() {

    document.getElementById("mySidenav").style.width = "250px";
  }
  closeNav() {

    document.getElementById("mySidenav").style.width = "0";
  }

  /*STICKY MENU*/
  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
}
