import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { CommonService } from 'src/app/services/common.service';
=======
import { CommonService } from 'src/app/Services/common.service';
>>>>>>> 629071a2d42ce8844d529de9cf9cf7697d9c743e

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html'
})
export class ClientsComponent implements OnInit {
<<<<<<< HEAD

  clients: any;
  constructor(private service: CommonService) { }

  ngOnInit(): void {

    
=======
  clients: any;
  constructor( private service: CommonService) { }

  ngOnInit(): void {
     /**this.clients  = this.getClients();
    console.log(this.clients, " -- Load Clients--");**/
      this.service.GetClients().subscribe(res=>{
      let response=res;
      this.clients=response.Result;
      console.log(this.clients);
    })
>>>>>>> 629071a2d42ce8844d529de9cf9cf7697d9c743e
  }
  
  /**getClients() {

    const Clients = [
      {
        "ClienID": 1, "path": "", "ImagePath": "https://dummyimage.com/150x100/000/fff",
      },
      {
        "ClienID": 2,  "path": "", "ImagePath": "https://dummyimage.com/150x100/000/fff",
      },
      {
        "ClienID": 3,  "path": "", "ImagePath": "https://dummyimage.com/150x100/000/fff",
      },
      {
        "ClienID": 4,  "path": "", "ImagePath": "https://dummyimage.com/150x100/000/fff",
      },
      {
        "ClienID": 5,  "path": "", "ImagePath": "https://dummyimage.com/150x100/000/fff",
      },
      {
        "ClienID": 6,  "path": "", "ImagePath": "https://dummyimage.com/150x100/000/fff",
      },
      {
        "ClienID": 7,  "path": "", "ImagePath": "https://dummyimage.com/150x100/000/fff",
      },
      {
        "ClienID": 8,  "path": "", "ImagePath": "https://dummyimage.com/150x100/000/fff",
      },
    ]
    return Clients;
  }**/
}
