import { Component, OnInit, HostListener } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  menus: any;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getMenus();
  }

/*STICKY MENU*/
isSticky: boolean = false;

@HostListener('window:scroll', ['$event'])
checkScroll() {
 this.isSticky = window.pageYOffset >= 250;
}

  /* LOADING MENUS */
  getMenus() {
    this.menus = [] = this.commonService.getMenus();
    console.log(this.menus, " -- Load Menus--");
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

}