import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory-certification-request',
  templateUrl: './inventory-certification-request.component.html',
  styleUrls: ['./inventory-certification-request.component.scss']
})
export class InventoryCertificationRequestComponent implements OnInit {

  lssuerData = [];
  remineIssuerData = [];

  savedData: any;

  constructor(    
    private inventoryService: InventoryService,
  ) { }

  ngOnInit() {
    this.savedData = localStorage.getItem('requsetData');
    this.inventoryService.getInventoryData().subscribe((res : any) => {
      this.getRequestData(res.data);
    });
  }

  getRequestData(data: any) {
    if(this.savedData == "" || this.savedData == undefined) {
      this.lssuerData = [];
    } else {
      this.savedData = JSON.parse(this.savedData);
      for(let index = 0; index < this.savedData.length; index++) {
        if(data[this.savedData[index]]['flag'] == '1') {
          this.lssuerData.push({name: data[this.savedData[index]]['name'],email: data[this.savedData[index]]['email_address']});
        } else if(data[this.savedData[index]]['flag'] == '2') {
          this.remineIssuerData.push({name: data[this.savedData[index]]['name'],email: data[this.savedData[index]]['email_address']});
        }
      }
    }
    localStorage.setItem('requsetData', '');
  }

}
