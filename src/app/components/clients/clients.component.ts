import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/Services/helper.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html'
})
export class ClientsComponent implements OnInit {

  clients: any;
  constructor(private service: HelperService) { }

  ngOnInit(): void {
     /**this.clients  = this.getClients();
    console.log(this.clients, " -- Load Clients--");**/
      this.service.GetClients().subscribe(res=>{
      let response=res;
      this.clients=response;
      console.log(this.clients);
    })
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
